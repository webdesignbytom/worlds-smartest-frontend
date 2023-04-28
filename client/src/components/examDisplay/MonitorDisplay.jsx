import React from 'react';

function MonitorDisplay({ answerQuestion }) {

  return (
    <div className='grid bg-neo-alt w-full h-full p-2  rounded-xl'>
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
        <div className='grid grid-cols-2 p-2 gap-4'>
          <div onClick={answerQuestion} className=' p-4 grid justify-center items-center outline outline-2 outline-black rounded hover:bg-blue-600'><span className='font-semibold'>answer</span></div>
          <div onClick={answerQuestion} className=' p-4 grid justify-center items-center outline outline-2 outline-black rounded hover:bg-blue-600'><span className='font-semibold'>answer</span></div>
          <div onClick={answerQuestion} className=' p-4 grid justify-center items-center outline outline-2 outline-black rounded hover:bg-blue-600'><span className='font-semibold'>answer</span></div>
          <div onClick={answerQuestion} className=' p-4 grid justify-center items-center outline outline-2 outline-black rounded hover:bg-blue-600'><span className='font-semibold'>answer</span></div>
        </div>
        {/* Answers */}
      </div>
    </div>
  );
}

export default MonitorDisplay;
