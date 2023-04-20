import React from 'react';
import { Link } from 'react-router-dom';
import PromoBoxes from '../../components/home/PromoBoxes';

function HomePage() {
  return (
    <div className='bg-black grid h-screen lg:max-h-screen lg:overflow-hidden text-gray-100'>
      <main className='grid grid-rows-rev bg-yellow-400 h-full'>
        {/* Text and CTA */}
        <section className='grid p-2 h-full'>
          <section className='mb-4 grid h-full'>
            <article className='text-center'>
              <h1 className='text-5xl mb-2 font-bold'>Worlds Smartest</h1>
              <h2 className='text-3xl font-semibold'>
                The world's formost intelligence test
              </h2>
            </article>
            <article className='text-center'>
              <p>
                The only intelligence test to allow the users to decide what
                counts as true intelligence!
              </p>
              <p>
                Prizes for the new{' '}
                <span className='font-semibold text-gray-200'>
                  Worlds Smartest Person
                </span>{' '}
                and runner up and regional categories
              </p>
              <p>Not your average IQ test!</p>
            </article>
          </section>
          {/* CTA */}
          <section>
            <div>
              <h3 className='text-2xl text-center mb-2'>
                Starting 1st October 2023 until July 31st 2024
              </h3>
              <h4 className='text-2xl text-center mb-2'>
                Reserve your spot to take part now
              </h4>
              <Link to='/sign-up'>
                <button className='bg-blue-500 w-full rounded-lg text-2xl my-4 p-2 outline outline-2 outline-gray-100 hover:bg-blue-400 hover:outline-gray-200'>
                  Sign Up Now!
                </button>
              </Link>
              <h5 className='text-xl text-center mb-2'>
                Sign up to have you say on the results without taking part!
              </h5>
            </div>
          </section>
        </section>

        {/* Boxes */}
        <section className='grid h-fit bg-red-200 p-2'>
          <section className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
            <PromoBoxes />
            {/*  <div className='bg-green-300 h-fit grid items-center justify-center rounded-lg outline outline-4 m-1 p-1 outline-gray-100'>
              <article className='grid px-1 py-2 text-center leading-4 justify-center items-center'>
                <h6 className='font-semibold'>Title Of This</h6>
                <span className='py-1'>ICON</span>
                <p className='py-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque minus non aliquam libero tempora sunt expedita quae dolores doloremque amet.</p>
                <Link to='/quiz-information'><span className='text-blue-500 font-semibold hover:text-blue-700'>Learn More!</span></Link>
              </article>
            </div>
            <div className='bg-green-300 h-fit grid items-center justify-center rounded-lg outline outline-4 m-1 p-1 outline-gray-100'>
              <article className='grid px-1 py-2 text-center leading-4 justify-center items-center'>
                <h6 className='font-semibold'>Title Of This</h6>
                <span className='py-1'>ICON</span>
                <p className='py-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque minus non aliquam libero tempora sunt expedita quae dolores doloremque amet.</p>
                <Link to='/quiz-information'><span className='text-blue-500 font-semibold hover:text-blue-700'>Learn More!</span></Link>
              </article>
            </div>
            <div className='bg-green-300 h-fit grid items-center justify-center rounded-lg outline outline-4 m-1 p-1 outline-gray-100'>
              <article className='grid px-1 py-2 text-center leading-4 justify-center items-center'>
                <h6 className='font-semibold'>Title Of This</h6>
                <span className='py-1'>ICON</span>
                <p className='py-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque minus non aliquam libero tempora sunt expedita quae dolores doloremque amet.</p>
                <Link to='/quiz-information'><span className='text-blue-500 font-semibold hover:text-blue-700'>Learn More!</span></Link>
              </article>
            </div>
            <div className='bg-green-300 h-fit grid items-center justify-center rounded-lg outline outline-4 m-1 p-1 outline-gray-100'>
              <article className='grid px-1 py-2 text-center leading-4 justify-center items-center'>
                <h6 className='font-semibold'>Title Of This</h6>
                <span className='py-1'>ICON</span>
                <p className='py-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque minus non aliquam libero tempora sunt expedita quae dolores doloremque amet.</p>
                <Link to='/quiz-information'><span className='text-blue-500 font-semibold hover:text-blue-700'>Learn More!</span></Link>
              </article>
            </div>
            <div className='bg-green-300 h-fit grid items-center justify-center rounded-lg outline outline-4 m-1 p-1 outline-gray-100'>
              <article className='grid px-1 py-2 text-center leading-4 justify-center items-center'>
                <h6 className='font-semibold'>Title Of This</h6>
                <span className='py-1'>ICON</span>
                <p className='py-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque minus non aliquam libero tempora sunt expedita quae dolores doloremque amet.</p>
                <Link to='/quiz-information'><span className='text-blue-500 font-semibold hover:text-blue-700'>Learn More!</span></Link>
              </article>
            </div>
            <div className='bg-green-300 h-fit grid items-center justify-center rounded-lg outline outline-4 m-1 p-1 outline-gray-100'>
              <article className='grid px-1 py-2 text-center leading-4 justify-center items-center'>
                <h6 className='font-semibold'>Title Of This</h6>
                <span className='py-1'>ICON</span>
                <p className='py-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque minus non aliquam libero tempora sunt expedita quae dolores doloremque amet.</p>
                <Link to='/quiz-information'><span className='text-blue-500 font-semibold hover:text-blue-700'>Learn More!</span></Link>
              </article>
            </div>
          </section> */}
          </section>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
