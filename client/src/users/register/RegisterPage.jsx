import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import RegisterForm from '../../components/forms/RegisterForm';

function RegisterPage() {
  
  return (
    <div className='relative bg-main-colour grid grid-rows-reg min-h-screen w-full text-gray-100'>
      <Navbar />
      <div className='grid lg:px-6'>
        <section className='grid bg-neo rounded-2xl'>
          <main className='grid grid-rows-reg mb-8'>
            <section className='py-4 px-4'>
              <article className='bg-neo-alt text-center rounded-xl py-2'>
                <div className='my-2'>
                  <h1 className='text-5xl font-semibold mb-2'>Sign Up Now</h1>
                  <h2 className='text-xl font-semibold px-2 py-2'>
                    Play for free and vote on categories
                  </h2>
                </div>
                <div className='px-4 py-2'>
                  <p className='text-sm leading-5'>
                    We collect quite a bit of information. We need this because
                    part of our test is to also collect social science data on
                    area of geographical areas of intelligence, beliefs in what
                    makes intelligence and other interesting data. However rest
                    assured your privacy will be protected.
                  </p>
                  <div className='pt-2 '>
                    <p>
                      Already A member?{' '}
                      <Link
                        className='text-hyperlink-blue cursor-pointer'
                        to='/login'
                      >
                        <span> Click here </span>
                      </Link>{' '}
                      to sign in!
                    </p>
                    <p>
                      Please{' '}
                      <Link
                        className='text-hyperlink-blue cursor-pointer'
                        to='terms-and-conditions'
                      >
                        <span> click here </span>
                      </Link>{' '}
                      for our data privacy policy
                    </p>
                  </div>
                </div>
              </article>
            </section>
            {/* Register Form */}
            <section className='grid px-4'>
              <div className='bg-neo-alt rounded-xl grid px-3 py-3 md:p-6'>
                <RegisterForm />
              </div>
            </section>
          </main>
        </section>
      </div>
    </div>
  );
}

export default RegisterPage;
