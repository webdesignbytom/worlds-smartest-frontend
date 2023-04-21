import React from 'react';
// Icons
import { FaQuestionCircle } from 'react-icons/fa';

function QuestionModal() {
  return (
    <section className='absolute no__highlights grid right-4 top-4 group'>
      <div className='flex justify-end items-center'>
        <span className='mx-2'>
          <p>INFO</p>
        </span>
        <FaQuestionCircle size={40} className='cursor-pointer' />
      </div>
      <article className='hidden m-2 bg-blue-500 p-2 group-hover:block outline outline-2 outline-black dark:outline-white rounded-lg max-w-[300px]'>
        <p class=''>
          Since the loss of Sir Stephen Hawking, we ask ourselves. Who is the
          worlds smartest Person? Intelligence, testing methods, social opinion
          and data science have lead vastly forwards in the time since his life
          and death. Here on www.worlds-smartest.com anyone may enter the
          gauntlet and fight using whit, cunning, skill and achievement to
          become the uncontested heavy weight intelligence of the world!
        </p>
      </article>
    </section>
  );
}

export default QuestionModal;
