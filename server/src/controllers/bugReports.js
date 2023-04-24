import { createBugReport, findAllBugReports } from '../domain/bugReports.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

export const getAllBugReports = async (req, res) => {
  console.log('Get all bug reports');
  try {
    // Find all reports
    const foundBugReports = await findAllBugReports();
    console.log('found foundSemester', foundBugReports);

    // If no found reports
    if (!foundBugReports) {
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
    return sendDataResponse(res, 200, { bugReports: foundBugReports });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all bug reports`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewBugReport = async (req, res) => {
  console.log('Creating new bug report');
  const { userId, questionId, content, screenshot, solution, examId } =
    req.body;
  console.log('req', req.body);
  
  try {
    // Find all reports
    const newReport = await createBugReport(
      userId,
      questionId,
      content,
      screenshot,
      solution,
      examId
    );
    console.log('newReportr', newReport);

    // If no found reports
    if (!newReport) {
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
    return sendDataResponse(res, 200, { bugReport: newReport });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all bug reports`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
