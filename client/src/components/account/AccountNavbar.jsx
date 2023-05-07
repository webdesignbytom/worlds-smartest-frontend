import React, { useState } from 'react';
// Images
import DefaultProfileImage from '../../assets/images/default.png';
// Styles
import '../../styles/neo.css';

function AccountNavbar() {
  const [activeNav, setActiveNav] = useState('currentCourse');

  const openCourseDataComponent = (event) => {
    const { id } = event.target;
    console.log('id: ' + id);
    setActiveNav(id);
  };

  return (
    <section className='grid grid-rows-a1a gap-4 md:gap-10 lg:gap-0 lg:max-w-[350px] p-4 rounded-xl bg-neo'>
      {/* PROFILE IMAGE */}
      <section className=''>
        <article className='text-center'>
          <h2 className='text-lg'>Account Overview</h2>
          <div className='grid justify-center my-6'>
            <img
              className='rounded-full w-52 h-52 bg-neo-alt'
              src={DefaultProfileImage}
              alt='user profile avatar'
            />
          </div>
        </article>
      </section>
      {/* Course Navigation */}
      <section className='grid mt-6 px-2'>
        <div className='grid gap-4 h-fit'>
          <div>
            <button
              id='currentCourse'
              onClick={openCourseDataComponent}
              className={
                activeNav === 'currentCourse'
                  ? 'bg-neo-in grid items-center justify-center p-2 w-full no__highlights'
                  : 'bg-neo-alt grid items-center justify-center p-2 w-full no__highlights'
              }
            >
              Course Records
            </button>
          </div>
          <div>
            <button
              id='values'
              onClick={openCourseDataComponent}
              className={
                activeNav === 'values'
                  ? 'bg-neo-in grid items-center justify-center p-2 w-full no__highlights'
                  : 'bg-neo-alt grid items-center justify-center p-2 w-full no__highlights'
              }
            >
              Calander
            </button>
          </div>
          <div>
            <button
              id='leaderboard'
              onClick={openCourseDataComponent}
              className={
                activeNav === 'leaderboard'
                  ? 'bg-neo-in grid items-center justify-center p-2 w-full no__highlights'
                  : 'bg-neo-alt grid items-center justify-center p-2 w-full no__highlights'
              }
            >
              Personal Infomation
            </button>
          </div>
          <div>
            <button
              id='prizes'
              onClick={openCourseDataComponent}
              className={
                activeNav === 'prizes'
                  ? 'bg-neo-in grid items-center justify-center p-2 w-full no__highlights'
                  : 'bg-neo-alt grid items-center justify-center p-2 w-full no__highlights'
              }
            >
              Click To Start Next Exam
            </button>
          </div>
        </div>
      </section>
      {/* Adverts */}
      <section className='bg-neo grid h-full min-h-[160px] mt-2'>
        <article className='grid items-center justify-center'></article>
      </section>
    </section>
  );
}

export default AccountNavbar;
