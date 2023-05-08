import React from 'react';
import MultipleChoiceAnswer from './answers/MultipleChoiceAnswer';

function ExamGameDisplay({ answerQuestion, currentExamNum, questionsList }) {
  return (
    <section className='grid bg-neo-alt w-full h-full p-2  rounded-xl'>
      <div className=' grid grid-rows-rev h-full w-full rounded-lg'>
        {/* Questions */}
        <div className=' grid justify-center items-center text-center px-2'>
          <article>
            <h3>Question {questionsList[currentExamNum].id}</h3>
            <h4>Question {questionsList[currentExamNum].type}</h4>
            <h4>Question {questionsList[currentExamNum].answerType}</h4>
            <p>{questionsList[currentExamNum].question}</p>
          </article>
        </div>
        {/* Answers */}
        {questionsList[currentExamNum].answerType && (
         <MultipleChoiceAnswer question={questionsList[currentExamNum]} answerQuestion={answerQuestion} />
        )}
      </div>
    </section>
  );
}

export default ExamGameDisplay;
