import React from 'react';

function MultipleChoiceAnswer({ answerQuestion, question }) {
  console.log('question: ', question);
  return (
    <section className='grid grid-cols-2 p-2 gap-4'>
      {question.answers.map((answer, index) => {
        return (
          <div>
            <button
              onClick={answerQuestion}
              className='w-full p-4 grid justify-center items-center bg-neo-in hover:bg-neo-alt'
            >
              <span className='font-semibold'>{answer.content}</span>
            </button>
          </div>
        )
      })}
    </section>
  );
}

export default MultipleChoiceAnswer;
