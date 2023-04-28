import React from 'react';
import { Link } from 'react-router-dom';
// Icons
import { TbBeta } from 'react-icons/tb';

function BetaModal() {
  return (
    <section className='absolute bg-neo p-4 rounded-2xl no__highlights grid left-4 top-4 group'>
      <div className='flex justify-start items-center'>
        <Link to='beta-test-questions'>
          <TbBeta size={40} className='cursor-pointer' />
        </Link>
        <span className='mx-2'>
          <p>BETA TEST</p>
        </span>
      </div>
      <article className='m-2 hidden bg-neo-in p-2 group-hover:block outline outline-2 outline-black dark:outline-white rounded-lg max-w-[300px]'>
        <p class=''>
          We are looking for help while we develop the testing environment and
          fix any bugs we can find. If you would like to test the system by
          answering a few practice test questions. Please{' '}
          <Link to='beta-test-questions'>
            <span className='font-semibold text-yellow-300'>click here</span>
          </Link>{' '}
          to the beta test zone.
        </p>
      </article>
    </section>
  );
}

export default BetaModal;
