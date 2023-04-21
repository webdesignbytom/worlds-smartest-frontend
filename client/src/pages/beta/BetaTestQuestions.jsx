import React, { useState } from 'react';
// Components
import BugReport from '../../components/reports/BugReport';
import MonitorDisplay from '../../components/examDisplay/MonitorDisplay';

function BetaTestQuestions() {
  const [questionsList, setQuestionsList] = useState([]);
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [totalQuestionsNum, setTotalQuestionsNum] = useState(0);
  const [currentExamNum, setCurrentExamNum] = useState(0);

  const loadNextQuestion = () => {
    console.log('loading next question');
  };

  const writeBugReport = () => {
    console.log('bug');
  };

  const answerQuestion = () => {
    console.log('answer');
  };

  const startExam = () => {
    console.log('Starting exam');
    // Start clock
  }

  return (
    <div className='relative grid test__bg min-h-screen h-screen lg:overflow-hidden w-full p-2'>
      {/* Fixed top buttons */}
      <BugReport writeBugReport={writeBugReport} />
      <section className='absolute no__highlights grid left-5 top-5 group'>
        <div className='flex justify-end items-center'>
          <p className='font-bold'>BETA TEST MODE</p>
        </div>
      </section>

      <main className='grid bg-blue-200 py-20'>
        <section className='grid grid-rows-[1fr] h-fullpx-4'>
          <section className='grid grid-rows-a1a'>
            <section className='text-center px-6'>
              <article className=''>
                <h1 className='text-3xl font-semibold'>
                  Worlds Smartest Person
                </h1>
              </article>
              <article className='flex justify-evenly items-centerd mt-10 p-2 bg-red-300 outline outline-2 outline-black rounded'>
                <h2>Exam {currentExamNum}</h2>
                <span className='font-semibold text-xl'>00:00</span>
                <h3>{currentQuestionNum}/{totalQuestionsNum}</h3>
              </article>
            </section>
            <section className='grid w-full items-center px-4 py-6'>
              <MonitorDisplay answerQuestion={answerQuestion} />
            </section>
            <article className='flex py-2 justify-center px-6'>
              <button
                onClick={loadNextQuestion}
                className='bg-gray-400 w-full rounded p-4 outline outline-2 outline-black hover:bg-gray-300'
              >
                Start Exam
              </button>
            </article>
          </section>
        </section>
        {/* Monitor Exam Display */}
      </main>
    </div>
  );
}

export default BetaTestQuestions;
