import React from "react";
// Components
import Navbar from "../../components/nav/Navbar";
// Images
import DefaultProfileImage from '../../assets/images/default.png';

function AccountPage() {
  return (
    <div className="relative bg-main-colour grid grid-rows-reg h-screen min-h-screen w-full text-gray-100">
      <Navbar />
      <section className='px-4 md:px-6 grid mt-4'>
        <div className='bg-neo-alt grid rounded-xl'>
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

export default AccountPage;
