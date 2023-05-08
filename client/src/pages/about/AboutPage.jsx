import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';

function AboutPage() {
  return (
    <div className='bg-main-colour font-poppins grid grid-rows-reg min-h-screen text-gray-100 lg:max-h-screen'>
      <Navbar />
      <section className='grid px-3 mt-4 md:mt-0 md:px-6 md:mb-10'>
        <div className='bg-neo-alt grid rounded-xl'>About</div>
      </section>
    </div>
  );
}

export default AboutPage;
