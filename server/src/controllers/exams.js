// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
// Requests
// Response messages
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

import {
  NotFoundEvent,
  ServerErrorEvent,
  MissingFieldEvent,
} from '../event/utils/errorUtils.js';
import { createExam, findAllExams, findExamById } from '../domain/exams.js';

export const getAllExams = async (req, res) => {
  console.log('Get all exams');
  try {
    // Find all exams
    const foundExams = await findAllExams();
    console.log('found foundExams', foundExams);

    // If no found complaints
    if (!foundExams) {
      // Create error instance
      const notFound = new NotFoundEvent(
        null,
        'Exams not found',
        'Exam Database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-current-course', req.user);
    return sendDataResponse(res, 200, { exams: foundExams });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all exams`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getExamById = async (req, res) => {
  console.log('Get exam bt id');
  let { examId } = req.body
  console.log('dd', typeof examId);
  
  console.log('examId: ' + examId);
  
  try {
    // Find all exams
    const foundExam = await findExamById(examId);
    console.log('found foundExam', foundExam);

    // If no found complaints
    if (!foundExam) {
      // Create error instance
      const notFound = new NotFoundEvent(
        null,
        'Exam not found',
        'Exam Database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-current-course', req.user);
    return sendDataResponse(res, 200, { exam: foundExam });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get exam by id`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getAllCourseExams = async (req, res) => {
  console.log('Get course exams');
};

export const createNewExam = async (req, res) => {
  console.log('create new exam');
  const {
    title,
    metaTitle,
    slug,
    summary,
    type,
    score,
    semesterTitle,
    semesterId,
    startDate,
    endDate,
  } = req.body;
  console.log('req', req.body);
  try {
    // Find all exams
    const createdExam = await createExam(
      title,
      metaTitle,
      slug,
      summary,
      type,
      score,
      semesterTitle,
      semesterId,
      startDate,
      endDate
    );

    console.log('created', createdExam);
    // myEmitterComplaints.emit('get-current-course', req.user);
    // return sendDataResponse(res, 200, { exams: foundExams });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all exams`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
