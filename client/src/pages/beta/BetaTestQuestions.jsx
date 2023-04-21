import React from 'react';
import BugReport from '../../components/reports/BugReport';

function BetaTestQuestions() {
  return (
    <div className='relative test__bg bg-red-300 min-h-screen h-screen lg:overflow-hidden grid p-2'>
      <main className='bg-white grid justify-center items-center'>
        <BugReport />
        <section className='absolute no__highlights grid left-4 top-4 group'>
          <div className='flex justify-end items-center'>
            <p className='font-bold'>BETA TEST MODE</p>
          </div>
        </section>
        <section>BetaTestQuestions</section>
      </main>
    </div>
  );
}

export default BetaTestQuestions;
