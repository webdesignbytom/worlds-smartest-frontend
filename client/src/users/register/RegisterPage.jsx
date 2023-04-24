import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import RegisterForm from '../../components/forms/RegisterForm';

function RegisterPage() {
  return (
    <div className='relative bg-blue-300 grid grid-rows-reg h-screen min-h-screen w-full '>
      <Navbar />
      <div className='bg-red-300 grid'>
        <main className='bg-green-300 grid grid-rows-reg mb-8'>
          <section>
            <article className='text-center'>
              <div className='my-2'>
                <h1 className='text-5xl font-semibold mb-2'>Sign Up Now</h1>
                <h2 className='text-xl font-semibold'>
                  Play for free and vote on categories
                </h2>
              </div>
              <div className='px-4 py-2'>
                <p className='leading-5'>
                  We collect quite a bit of information. We need this because
                  part of our test is to also collect social science data on
                  area of geographical areas of intelligence, beliefs in what
                  makes intelligence and other interesting data. However rest
                  assured your privacy will be protected.
                </p>
                <p>
                  Please{' '}
                  <Link className='text-hyperlink-blue cursor-pointer' to='terms-and-conditions'>
                    <span> click here </span>
                  </Link>{' '}
                  for our data privacy policy
                </p>
              </div>
            </article>
          </section>
          {/* Register Form */}
          <section className='bg-blue-400 grid px-4'>
            <div className='bg-yellow-500 grid'>
              <RegisterForm />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default RegisterPage;
