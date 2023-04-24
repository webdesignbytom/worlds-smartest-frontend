import dbClient from '../utils/dbClient.js';

export const findAllCourses = () =>
  dbClient.course.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      semesters: true,
    },
  });

export const findCurrentCourse = () =>
  dbClient.course.findFirst({
    where: {
      isActive: true,
    },
    include: {
      semesters: true,
    },
  });

export const createCourse = (title, description) =>
  dbClient.course.create({
    data: { title: title, description: description },
  });
