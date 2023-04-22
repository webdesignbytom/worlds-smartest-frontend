// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
// Requests
import { findCurrentCourseSemester } from '../domain/semesters.js';
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
        'Semester not found',
        'Courses Database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-current-course', req.user);
    return sendDataResponse(res, 200, { course: foundSemester });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get current semester`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};


