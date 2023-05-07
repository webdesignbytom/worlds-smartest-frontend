import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import AccountNavbar from '../../components/account/AccountNavbar';

function AccountPage() {
  return (
    <div className='bg-main-colour font-poppins grid grid-rows-reg min-h-screen text-gray-100 lg:max-h-screen'>
      <Navbar />
      <section className='grid px-4 md:px-6 mb-8 w-full'>
        <div className='grid lg:grid-cols-x3 gap-8'>
          {/* Side nav */}
          <AccountNavbar />
          {/* MAIN */}
          <main className='grid rounded-xl bg-neo w-full p-2'>b</main>
        </div>
      </section>
    </div>
  );
}

export default AccountPage;
