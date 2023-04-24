import dbClient from '../utils/dbClient.js';

export const findAllQuestions = () =>
  dbClient.examQuestion.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const createQuestion = (category, examId) =>
  dbClient.examQuestion.create({
    data: {
      category: category,
      examId: examId
    },
  });
