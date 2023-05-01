import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function Navbar() {
  const { toggleNavbar, toggleNavigation } = useContext(ToggleContext);

  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    setActiveNav(window.location.pathname);
  }, []);

  return (
    <>
      <header className='relative grid text-gray-100 h-fit py-3 px-3 md:p-6 items-center'>
        <div className='grid grid-flow-col justify-between bg-neo w-full py-4 px-3 md:px-10 rounded-2xl'>
          <section className='pl-2 no__highlights grid items-center justify-center'>
            <Link to='/'>
              <div className='font-bold text-2xl'>WS</div>
            </Link>
          </section>

          {/* Phone Nav */}
          <nav
            onClick={() => {
              toggleNavbar();
            }}
            className='md:hidden no__highlights pr-2'
          >
            <span className='cursor-pointer text-white hover:text-hover-grey'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-10 h-10 transition no__highlights duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125'
                data-te-animation-init
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </span>
          </nav>

          {/* Monitor Nav */}
          <nav className='hidden md:flex'>
            <ul className='flex gap-8 items-center'>
              <li
                className={activeNav === '/' ? 'selected__link' : 'nav__link'}
              >
                <Link to='/'>
                  <span>Home</span>
                </Link>
              </li>

              <li
                className={
                  activeNav === '/beta-test-questions'
                    ? 'selected__link'
                    : 'nav__link'
                }
              >
                <Link to='/beta-test-questions'>
                  <span>Beta Mode</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/course' ? 'selected__link' : 'nav__link'
                }
              >
                <Link to='/course'>
                  <span>Course</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/account' ? 'selected__link' : 'nav__link'
                }
              >
                <Link to='/account'>
                  <span>Account</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/login' ? 'selected__link' : 'nav__link'
                }
              >
                <Link to='/login'>
                  <span>Login</span>
                </Link>
              </li>
              <li
                className={
                  activeNav === '/sign-up' ? 'selected__link' : 'nav__link'
                }
              >
                <Link to='/sign-up'>
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {toggleNavigation && (
        <section className='w-full absolute z-30 top-[98px] px-4'>
          <nav className='bg-neo rounded-xl grid'>
            <ul className='py-4 text-xl'>
              <li className='px-2 py-4 text-center'>
                <Link onClick={toggleNavbar} to='/'>
                  <span>Home</span>
                </Link>
              </li>
              <li className='px-2 py-4 text-center'>
                <Link onClick={toggleNavbar} to='/course'>
                  <span>Course</span>
                </Link>
              </li>
              <li className='px-2 py-4 text-center'>
                <Link onClick={toggleNavbar} to='/quiz-information'>
                  <span>Info</span>
                </Link>
              </li>
              <li className='px-2 py-4 text-center'>
                <Link onClick={toggleNavbar} to='/beta-test-questions'>
                  <span>Beta Mode</span>
                </Link>
              </li>
              <li className='px-2 py-4 text-center'>
                <Link onClick={toggleNavbar} to='/account'>
                  <span>Account</span>
                </Link>
              </li>
              <li className='px-2 py-4 text-center'>
                <Link onClick={toggleNavbar} to='/sign-up'>
                  <span>Sign Up</span>
                </Link>
              </li>
              <li className='px-2 py-4 text-center'>
                <Link onClick={toggleNavbar} to='/login'>
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      )}
    </>
  );
}

export default Navbar;
