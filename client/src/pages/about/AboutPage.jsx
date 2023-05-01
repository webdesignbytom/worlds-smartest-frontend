import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Images
import DefaultProfileImage from '../../assets/images/default.png';

function AboutPage() {
  return (
    <div className='grid bg-[#242528] text-gray-100 grid-rows-reg min-h-screen w-full'>
      <Navbar />
      <section className='px-4 grid'>
        <div className='bg-neo-alt grid rounded'>
          <div className='grid justify-center my-6'>
            <img
              className='rounded-full w-52 h-52 bg-neo-alt'
              src={DefaultProfileImage}
              alt='user profile avatar'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
