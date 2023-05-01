import React from 'react';

function ExamGameDisplay({ answerQuestion }) {

  return (
    <section className='grid bg-neo-alt w-full h-full p-2  rounded-xl'>
      <div className=' grid grid-rows-rev h-full w-full rounded-lg'>
        {/* Questions */}
        <div className=' grid justify-center items-center text-center px-2'>
          <article>
            <h3>Question 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quod delectus ut minus debitis dicta pariatur sapiente
              sit impedit, odit illo, nihil deleniti veniam quas.
            </p>
          </article>
        </div>
        {/* Answers */}
        <section className='grid grid-cols-2 p-2 gap-4'>
          <div>
            <button
              onClick={answerQuestion}
              className='w-full p-4 grid justify-center items-center bg-neo-in hover:bg-neo-alt'
            >
              <span className='font-semibold'>answer</span>
            </button>
          </div>
          <div>
            <button
              onClick={answerQuestion}
              className='w-full p-4 grid justify-center items-center bg-neo-in hover:bg-neo-alt'
            >
              <span className='font-semibold'>answer</span>
            </button>
          </div>
          <div>
            <button
              onClick={answerQuestion}
              className='w-full p-4 grid justify-center items-center bg-neo-in hover:bg-neo-alt'
            >
              <span className='font-semibold'>answer</span>
            </button>
          </div>
          <div>
            <button
              onClick={answerQuestion}
              className='w-full p-4 grid justify-center items-center bg-neo-in hover:bg-neo-alt'
            >
              <span className='font-semibold'>answer</span>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ExamGameDisplay;
