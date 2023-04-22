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
import { findAllExams } from '../domain/exams.js';


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


