import dbClient from '../utils/dbClient.js';

export const findCurrentCourseSemester = () =>
  dbClient.semester.findFirst({
    where: {
      isActive: true,
    },
    include: {
      exams: true,
    },
  });

export const findAllSemesters = () =>
  dbClient.semester.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      exams: true,
    },
  });

export const findSemesterById = (semesterId) =>
  dbClient.semester.findFirst({
    where: {
      id: semesterId,
    },
    include: {
      exams: true,
    },
  });

export const findSemestersByCourse = (courseId) =>
  dbClient.semester.findFirst({
    where: {
      courseId: courseId,
    },
    include: {
      exams: true,
    },
  });

export const findSemesterByData = (title, courseId) =>
  dbClient.semester.findFirst({
    where: {
      AND: [{ title: title }, { courseId: courseId }],
    },
  });

export const createSemester = (title, courseId) =>
  dbClient.semester.create({
    data: {
      courseId: courseId,
      title: title,
    },
  });
