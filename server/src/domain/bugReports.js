import dbClient from '../utils/dbClient.js';

export const findAllBugReports = () =>
  dbClient.bugReport.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const createBugReport = (
  userId,
  questionId,
  content,
  screenshot,
  solution,
  examId
) =>
  dbClient.bugReport.create({
    data: {
      userId: userId,
      questionId: questionId,
      content: content,
      screenshot: screenshot,
      solution: solution,
      examId: examId,
    },
  });
