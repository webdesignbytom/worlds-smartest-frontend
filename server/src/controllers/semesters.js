// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
// Requests
import {
  findAllSemesters,
  findCurrentCourseSemester,
  findSemesterById,
  findSemestersByCourse,
} from '../domain/semesters.js';
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

export const getAllSemesters = async (req, res) => {
  console.log('Get current semester');
  try {
    // Find all complaints
    const foundSemesters = await findAllSemesters();
    console.log('found foundSemester', foundSemesters);

    // If no found complaints
    if (!foundSemesters) {
      // Create error instance
      const notFound = new NotFoundEvent(
        null,
        EVENT_MESSAGES.semesterNotFound,
        EVENT_MESSAGES.semesterTag
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-current-course', req.user);
    return sendDataResponse(res, 200, { semesters: foundSemesters });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all semesters`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getCurrentSemester = async (req, res) => {
  console.log('Get current semester');
  try {
    // Find all complaints
    const foundSemester = await findCurrentCourseSemester();
    console.log('found foundSemester', foundSemester);

    // If no found complaints
    if (!foundSemester) {
      // Create error instance
      const notFound = new NotFoundEvent(
        null,
        EVENT_MESSAGES.semesterNotFound,
        EVENT_MESSAGES.semesterTag
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-current-course', req.user);
    return sendDataResponse(res, 200, { semester: foundSemester });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get current semester`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getSemesterById = async (req, res) => {
  console.log('Get semester by Id');
  const semesterId = Number(req.params.id)
  console.log('semesterId', semesterId);

  try {
    // Find all complaints
    const foundSemester = await findSemesterById(semesterId);
    console.log('found foundSemester', foundSemester);

    // If no found complaints
    if (!foundSemester) {
      // Create error instance
      const notFound = new NotFoundEvent(
        null,
        EVENT_MESSAGES.semesterNotFound,
        EVENT_MESSAGES.semesterTag
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-current-course', req.user);
    return sendDataResponse(res, 200, { semester: foundSemester });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get current semester`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getYearlySemesters = async (req, res) => {
  console.log('Get semesters for year');
  const courseId = Number(req.params.id)
  console.log('courseId', courseId);

  try {
    // Find all complaints
    const foundSemesters = await findSemestersByCourse(courseId);
    console.log('found foundSemester', foundSemesters);

    // If no found complaints
    if (!foundSemesters) {
      // Create error instance
      const notFound = new NotFoundEvent(
        null,
        EVENT_MESSAGES.semesterNotFound,
        EVENT_MESSAGES.semesterTag
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-current-course', req.user);
    return sendDataResponse(res, 200, { semesters: foundSemesters });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get current semester`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
