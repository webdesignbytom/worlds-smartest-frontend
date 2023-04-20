import React from 'react'
// Icons
import { TbBeta } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function BetaModal() {
  return (
    <section className='absolute grid left-4 top-4 group'>
      <div className='flex justify-start items-center'>
        <TbBeta size={40} className='cursor-pointer' />
        <span className='mx-2'>
          <p>BETA TEST</p>
        </span>
      </div>
      <article className='m-2 hidden bg-blue-500 p-2 group-hover:block outline outline-2 outline-white rounded-lg max-w-[300px]'>
        <p class=''>
          We are looking for help while we develop the testing environment and fix any bugs we can find. If you would like to test the system by answering a few practice test questions. Please <Link to='beta-test-questions'><span className='font-semibold text-yellow-300'>click here</span></Link> to the beta test zone.
        </p>
      </article>
    </section>
  )
}

export default BetaModal