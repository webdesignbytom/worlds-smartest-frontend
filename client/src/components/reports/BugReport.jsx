import React from 'react';
// Icons
import { AiFillBug } from 'react-icons/ai';

function BugReport() {

    const writeBugReport = () => {
        console.log('bug')
    }

  return (
    <section onClick={writeBugReport} className='absolute no__highlights grid right-4 top-4 cursor-pointer'>
      <article className='flex justify-end items-center bg-gray-200 rounded-xl'>
        <span className='mx-2'>
          <p>BUG REPORT</p>
        </span>
        <AiFillBug size={40} />
      </article>
    </section>
  );
}

export default BugReport;
