import React from 'react';
import { Link } from 'react-router-dom';
// Components
import PromoBoxes from '../../components/home/PromoBoxes';
import QuestionModal from '../../components/home/QuestionModal';
import BetaModal from '../../components/home/BetaModal';

function HomePage() {
  return (
    <div className='bg-gray-50 dark:bg-black grid h-screen lg:max-h-screen lg:overflow-hidden dark:text-gray-100'>
      <main className='relative grid grid-rows-rev h-full'>
        {/* Question mark */}
        <QuestionModal />
        {/* Beta test */}
        <BetaModal />

        {/* Text and CTA */}
        <section className='grid mt-4 grid-rows-rev h-full'>
          <section className='mb-4 grid h-full items-center'>
            <section>
              <article className='text-center'>
                <h1 className='text-5xl mb-2 font-bold'>Worlds Smartest</h1>
                <h2 className='text-3xl font-semibold'>
                  The world's formost intelligence test
                </h2>
                <h3 className='text-2xl text-center my-4'>
                  Starting{' '}
                  <span className='font-semibold'>1st October 2023</span> until{' '}
                  <span className='font-semibold'>July 31st 2024</span>
                </h3>
              </article>
              <article className='text-center'>
                <p>
                  The only intelligence test to allow the users to decide what
                  counts as true intelligence!
                </p>
                <p>
                  Prizes for the new
                  <span className='font-semibold text-gray-800 italic'>
                    {' '}
                    Worlds Smartest Person{' '}
                  </span>
                  and runner up and regional categories
                </p>
                <p>
                  Not your average <span className='font-bold'>IQ</span> test!
                </p>
              </article>
            </section>
          </section>
          {/* CTA */}
          <section className='grid justify-center h-fit mb-4'>
            <article className='leading-5 w-fit'>
              <h4 className='text-2xl text-center'>
                Reserve your spot to take part now!
              </h4>
              <Link className='' to='/sign-up'>
                <button className='w-full rounded-lg p-2 my-2 text-2xl outline outline-2 text-white font-bold outline-black hover:bg-blue-400 bg-blue-500 hover:outline-gray-800'>
                  Sign Up Now!
                </button>
              </Link>
              <h5 className='text-center text-lg'>
                Have <span className='italic'>your</span> say on the results
                without taking part by{' '}
                <Link to='sign-up'>
                  <span className='italic text-blue-500'>signing up </span>
                </Link>
                for free!
              </h5>
            </article>
          </section>
        </section>

        {/* Boxes */}
        <section className='grid h-fit my-4 mx-6 lg:mx-10 lg:mb-14'>
          <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4'>
            <PromoBoxes />
          </section>
        </section>

        {/* Phone only second sign up button */}
        <section className='md:hidden flex justify-center m-2 p-2'>
          <Link to='/sign-up'>
            <button className='bg-blue-500 w-full rounded-lg text-2xl mb-6 p-2 outline outline-2 outline-gray-100 hover:bg-blue-400 hover:outline-gray-200'>
              Sign Up Now!
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
