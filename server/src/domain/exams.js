import dbClient from '../utils/dbClient.js';

export const findAllExams = () => dbClient.exam.findMany({});
