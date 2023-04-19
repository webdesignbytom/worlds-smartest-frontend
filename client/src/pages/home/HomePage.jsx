import React from 'react';

function HomePage() {
  return (
    <div className='bg-black h-screen grid'>
      <main className='grid h-full justify-center items-center'>
        <section>
          <section className='mb-4'>
            <article className='text-gray-100 text-center'>
              <h1 className='text-5xl mb-2 font-bold'>Worlds Smartest</h1>
              <h2 className='text-3xl font-semibold'>
                The world's formost intelligence test
              </h2>
            </article>
            <article className='text-gray-100 text-center'>
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
              <h3 className='text-gray-100 text-center mb-2'>
                Sign in/Sign up to take part now
              </h3>
              <button className='bg-colour-med grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'>
                Enter
              </button>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
