import React from 'react';
// Icons
import { AiFillBug } from 'react-icons/ai';

function BugReport({ writeBugReport }) {

  return (
    <section onClick={writeBugReport} className='absolute no__highlights grid right-5 top-5 cursor-pointer'>
      <article className='flex justify-end items-center bg-neo p-2 rounded-xl'>
        <span className='mx-2'>
          <p>BUG REPORT</p>
        </span>
        <AiFillBug size={40} className='hidden md:grid' />
        <AiFillBug size={30} className='md:hidden' />
      </article>
    </section>
  );
}

export default BugReport;
