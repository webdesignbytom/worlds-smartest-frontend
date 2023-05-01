import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const testUser = await dbClient.user.create({
    data: {
      email: `xtombrock1989@gmail.com`,
      password,
      profile: {
        create: {
          username: `xtombrock`,
        },
      },
    },
  });

  const devUser = await dbClient.user.create({
    data: {
      email: 'dev@dev.com',
      password,
      role: 'DEVELOPER',
      profile: {
        create: {
          username: `deve`,
        },
      },
    },
  });

  // Course
  const firstCourse = await dbClient.course.create({
    data: {
      title: 'Worlds Smartest Person 2023-2024',
      description:
        'The first year the greatest intelligence exam is taking place.',
      isActive: true,
    },
  });

  const yearOneSemester = await dbClient.semester.create({
    data: {
      title: 'Autumn',
      courseId: firstCourse.id,
      isActive: true,
    },
  });

  const yearOneSemesters = await dbClient.semester.createMany({
    data: [
      {
        title: 'Winter',
        courseId: firstCourse.id,
      },
      {
        title: 'Spring',
        courseId: firstCourse.id,
      },
    ],
  });

  const examOne = await dbClient.exam.create({
    data: {
      title: 'Exam One - A New Era',
      metaTitle:
        'Exam One - A New Era. www.worlds-smartest.com first ever course, semester and day. Welcome to the worlds smartest person test.',
      slug: 'exam-one-autumn-semester',
      summary:
        'The first ever test has finally started. We have kept it simple to check nothing breaks and to ease you in. 50 random questions have been selected for you today.',
      score: 50,
      semesterId: yearOneSemester.id,
      semesterTitle: yearOneSemester.title,
    },
  });

  const questionOneExamOne = await dbClient.examQuestion.create({
    data: {
      questionType: 'MULTIPLECHOICE',
      type: 'General Knowledge',
      category: 'Space',
      question: 'What is the closest planet to the Sun?',
      examId: examOne.id,
    },
  });

  const questionTwoExamOne = await dbClient.examQuestion.create({
    data: {
      questionType: 'MULTIPLECHOICE',
      type: 'General Knowledge',
      category: 'Sport',
      question: 'What sport did Cassius Clay play?',
      examId: examOne.id,
    },
  });

  const questionThreeExamOne = await dbClient.examQuestion.create({
    data: {
      type: 'Puzzle',
      questionType: 'USERINPUT',
      category: 'Puzzle',
      question: 'Where is the closest place you can rest a hat?',
      examId: examOne.id,
    },
  });

  const questionsOneAnswers = await dbClient.examAnswer.createMany({
    data: [
      {
        questionId: questionOneExamOne.id,
        content: 'Mercury',
        isCorrect: true,
      },
      {
        questionId: questionOneExamOne.id,
        content: 'Egypt',
      },
      {
        questionId: questionOneExamOne.id,
        content: 'Saturn',
      },
      {
        questionId: questionOneExamOne.id,
        content: 'Jupiter',
      },
    ],
  });

  // EVENTS
  const eventOne = await dbClient.event.create({
    data: {
      type: 'ERROR',
      topic: 'Test event',
      code: 500,
      content: '500 test content',
    },
  });
  const eventTwo = await dbClient.event.create({
    data: {
      type: 'USER',
      topic: 'Test event',
      code: 200,
      content: '200 test content',
    },
  });
  const eventThree = await dbClient.event.create({
    data: {
      type: 'ADMIN',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFour = await dbClient.event.create({
    data: {
      type: 'VISITOR',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFive = await dbClient.event.create({
    data: {
      type: 'DEVELOPER',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
