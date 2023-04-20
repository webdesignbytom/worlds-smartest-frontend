import React from 'react';
import { Link } from 'react-router-dom';
// Components
import PromoBoxes from '../../components/home/PromoBoxes';
// Icons
import { FaQuestionCircle } from 'react-icons/fa';

function HomePage() {
  return (
    <div className='bg-black grid h-screen lg:max-h-screen lg:overflow-hidden text-gray-100'>
      <main className='relative grid grid-rows-rev bg-yellow-400 h-full'>
        {/* Question mark */}
        <section className='absolute grid right-4 top-4 group'>
          <div className='flex justify-end'>
            <FaQuestionCircle size={40} className='cursor-pointer' />
          </div>
          <article className='invisible bg-red-400 p-2 group-hover:visible outline outline-2 outline-black max-w-[300px]'>
            <p class=''>
              Since the loss of Sir Stephen Hawking, we ask ourselves. Who is the worlds smartest Person? Intelligence, testing methods, social opinion and data science have lead vastly forwards in the time since his life and death. Here on www.worlds-smartest.com anyone may enter the gauntlet and fight using whit, cunning, skill and achievement to become the uncontested heavy weight intelligence of the world!
            </p>
          </article>
        </section>
        {/* Text and CTA */}
        <section className='grid bg-red-300 p-2 h-full'>
          <section className='mb-4 bg-green-300 grid h-full'>
            <article className='text-center'>
              <h1 className='text-5xl mb-2 font-bold'>Worlds Smartest</h1>
              <h2 className='text-3xl font-semibold'>
                The world's formost intelligence test
              </h2>
              <h3 className='text-2xl text-center mb-2'>
                Starting 1st October 2023 until July 31st 2024
              </h3>
            </article>
            <article className='text-center'>
              <p>
                The only intelligence test to allow the users to decide what
                counts as true intelligence!
              </p>
              <p>
                Prizes for the new
                <span className='font-semibold text-gray-200'>
                  Worlds Smartest Person
                </span>
                and runner up and regional categories
              </p>
              <p>Not your average IQ test!</p>
            </article>
          </section>
          {/* CTA */}
          <section className='bg-blue-300 grid justify-center'>
            <article className='leading-5 w-fit'>
              <h4 className='text-2xl text-center'>
                Reserve your spot to take part now
              </h4>
              <Link className='' to='/sign-up'>
                <button className='bg-blue-500 w-full rounded-lg p-2 my-2 text-2xl outline outline-2 outline-gray-100 hover:bg-blue-400 hover:outline-gray-200'>
                  Sign Up Now!
                </button>
              </Link>
              <h5 className='text-center text-lg'>
                Have <span className='italic'>your</span> say on the results
                without taking part by{' '}
                <Link to='sign-up'>
                  <span className='italic'>signing up</span>
                </Link>
                !
              </h5>
            </article>
          </section>
        </section>

        {/* Boxes */}
        <section className='grid h-fit bg-red-200 my-4 mx-6 lg:mx-10 lg:mb-10'>
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
