import React, { useEffect } from 'react';
import { useState } from 'react';
import { getCurrentDateAndTime } from '../utils/TimeDate';

export const ExamContext = React.createContext();

const ExamContextProvider = ({ children }) => {
  const [examUserData, setExamUserData] = useState({
    startedExam: false,
    startedExamAt: {
      dateStarted: '',
      timeStarted: '',
    },
  });
  const [examTimer, setExamTimer] = useState(0);

  useEffect(() => {
    if (examUserData.startedExam) {
      const interval = setInterval(() => {
        setExamTimer((prev) => prev + 1);
        console.log('exam', examUserData);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [examUserData]);

  const loadNextQuestion = () => {
    console.log('loading next question');
    const questionStarted = getCurrentDateAndTime()

    setExamUserData({
        ...examUserData,
        question1: questionStarted
    })
  };

  const startExam = () => {
    // Start clock
    const startDT = getCurrentDateAndTime();
    console.log('startDT', startDT);

    setExamUserData({
      ...examUserData,
      startedExam: true,
      startedExamAt: {
        dateStarted: startDT.formatedDate,
        timeStarted: startDT.formatedTime,
      },
    });
  };

  console.log('exam user data loaded', examUserData);

  return (
    <ExamContext.Provider value={{ loadNextQuestion, startExam, examUserData, examTimer }}>
      {children}
    </ExamContext.Provider>
  );
};

export default ExamContextProvider;
