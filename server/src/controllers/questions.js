import { createBugReport, findAllBugReports } from '../domain/bugReports.js';
import { createQuestion, findAllQuestions } from '../domain/questions.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { MissingFieldEvent, NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

export const getAllQuestions = async (req, res) => {
  console.log('Get all questions');
  try {
    // Find all reports
    const foundQuestions = await findAllQuestions();
    console.log('found questions', foundQuestions);

    // If no found reports
    if (!foundQuestions) {
      // Create error instance
      const notFound = new NotFoundEvent(
        null,
        EVENT_MESSAGES.notFoundQuestion,
        EVENT_MESSAGES.questionsTag
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-current-course', req.user);
    return sendDataResponse(res, 200, { questions: foundQuestions });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all questions`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewQuestion = async (req, res) => {
  console.log('Creating new question');
  const { category, examId } = req.body;
  console.log('req', req.body);

  try {
    if (!category || !examId) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Create Question: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }
    // Find all reports
    const newQuestion = await createQuestion(category, examId);
    console.log('newQuestion', newQuestion);

    // If no found reports
    if (!newQuestion) {
      // Create error instance
      const notFound = new NotFoundEvent(
        null,
        EVENT_MESSAGES.createQuestionFail,
        EVENT_MESSAGES.questionsTag
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-current-course', req.user);
    return sendDataResponse(res, 200, { question: newQuestion });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all bug reports`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
