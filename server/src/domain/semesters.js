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
