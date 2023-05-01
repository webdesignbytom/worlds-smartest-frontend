import React from 'react'
// Components
import Navbar from '../../components/nav/Navbar';

function SettingsPage() {
    return (
        <div className="relative bg-main-colour grid grid-rows-reg h-screen min-h-screen w-full text-gray-100">
          <Navbar />
          <section className='px-4 md:px-6 grid mt-4'>
            <div className='bg-neo-alt grid rounded-xl'>
              <div className='grid justify-center my-6'>
                
              </div>
            </div>
          </section>
        </div>
      );
}

export default SettingsPage