// Emitters
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  createCourse,
  findAllCourses,
  findCurrentCourse,
} from '../domain/courses.js';
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
  BadRequestEvent,
} from '../event/utils/errorUtils.js';
import { myEmitterCourse } from '../event/courseEvents.js';

// Get all courses - available to all users
export const getAllCourses = async (req, res) => {
  console.log('get all courses');
  try {
    // Find all complaints
    const foundCourses = await findAllCourses();

    // If no found complaints
    if (!foundCourses) {
      // Create error instance
      const notFound = new NotFoundEvent(
        null,
        'Courses not found',
        'Courses Database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-all-courses', null);
    return sendDataResponse(res, 200, { courses: foundCourses });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all courses`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getCurrentCourse = async (req, res) => {
  console.log('Get current course');
  try {
    // Find all complaints
    const foundCourse = await findCurrentCourse();
    console.log('found course', foundCourse);

    // If no found complaints
    if (!foundCourse) {
      // Create error instance
      const notFound = new NotFoundEvent(
        null,
        'Course not found',
        'Courses Database'
      );
      myEmitterErrors.emit('error', notFound);
      // Send response
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    // myEmitterComplaints.emit('get-current-course', req.user);
    return sendDataResponse(res, 200, { course: foundCourse });
    //
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get current course`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewCourse = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newCourse = await createCourse(title, description);
    if (newCourse) {
      const notCreated = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createUserFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    //TODO: add events
    // myEmitterCourse.emit('create-course', createdUser);
    return sendDataResponse(res, 201, { course: newCourse });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create new course`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
