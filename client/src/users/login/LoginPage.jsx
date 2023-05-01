import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import LoginForm from '../../components/forms/LoginForm';

function LoginPage() {
  return (
    <div className='relative bg-main-colour grid grid-rows-reg h-screen min-h-screen w-full text-gray-100'>
      <Navbar />
      <div className='grid px-3 md:px-6'>
        <section className='grid bg-neo rounded-2xl'>
          <main className='grid grid-rows-reg mb-8'>
            <section className='py-4 px-4'>
              <article className='bg-neo-alt text-center rounded-xl py-2'>
                <div className='my-2'>
                  <h1 className='text-5xl font-semibold mb-2'>Login</h1>
                  <h2 className='text-xl font-semibold'>
                    Play for free and vote on categories
                  </h2>
                </div>
                <section className='h-fit'>
                  <div className='px-4'>
                    <p>
                      Not a member?{' '}
                      <Link
                        className='text-hyperlink-blue cursor-pointer'
                        to='/sign-up'
                      >
                        <span> Click here </span>
                      </Link>{' '}
                      to sign up!
                    </p>
                  </div>
                  <div className='px-4'>
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
                </section>
              </article>
            </section>
            {/* Register Form */}
            <section className="grid px-4">
              <div className="bg-neo-alt rounded-xl grid px-3 py-3 md:p-6">
                <LoginForm />
              </div>
            </section>
          </main>
        </section>
      </div>
    </div>
  );
}

export default LoginPage;
