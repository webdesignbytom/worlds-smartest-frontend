import dbClient from '../utils/dbClient.js';

export const findCurrentCourseSemester = () =>
  dbClient.course.findFirst({
    where: {
      isActive: true,
    },
    include: {
      semesters: {
        where: {
          isActive: true,
        },
      },
    },
  });
