import dbClient from '../utils/dbClient.js';

export const findAllExams = () => dbClient.exam.findMany({});

export const createExam = (
  title,
  metaTitle,
  slug,
  summary,
  type,
  score,
  semesterTitle,
  semesterId,
  startDate,
  endDate
) =>
  dbClient.exam.create({
    data: {
      title: title,
      metaTitle: metaTitle,
      slug: slug,
      summary: summary,
      type: type,
      score: score,
      semesterTitle: semesterTitle,
      semesterId: semesterId,
      startDate: startDate,
      endDate: endDate,
    },
  });
