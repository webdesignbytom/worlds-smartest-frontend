import { myEmitter } from '../utils/eventEmitter.js';
import {
  createGetAllComplaintsEvent,
  createCreateComplaintEvent,
  createDeleteComplaintEvent,
  createGetUserComplaintEvent,
  createGetComplaintByIdEvent,
} from './utils/complaintUtils.js';

export const myEmitterCourse = myEmitter;

myEmitterCourse.on('get-all-complaints', async (user) =>
  createGetAllComplaintsEvent(user)
);

myEmitterCourse.on('create-complaint', async (user) =>
  createCreateComplaintEvent(user)
);

myEmitterCourse.on('deleted-complaint', async (user) =>
  createDeleteComplaintEvent(user)
);

myEmitterCourse.on('get-complaint-by-id', async (user) =>
  createGetComplaintByIdEvent(user)
);

myEmitterCourse.on('get-user-complaints', async (user) =>
  createGetUserComplaintEvent(user)
);
