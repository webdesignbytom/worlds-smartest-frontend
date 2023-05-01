import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Utils
import CountrySelect from '../../users/utils/CountrySelect';
import { registerDataTemplate } from '../../users/utils/utils';

function RegisterForm() {
  const [registerData, setRegisterData] = useState(registerDataTemplate);
  const handleChange = (event) => {};

  const handleRegister = (event) => {
    event.preventDefault();
    console.log('register');
  };
  return (
    <form onSubmit={handleRegister} className=''>
      <section className='grid gap-2'>
        {/* Title */}
        <div className='w-full grid grid-flow-col justify-between'>
          <label htmlFor='title'>Title:</label>
          <select
            id='title'
            name='title'
            onChange={handleChange}
            className='bg-neo-in ml-4 p-1'
            required
          >
            <option className='text-black' defaultValue=''>
              --
            </option>
            <option className='text-black' value='mr'>
              Mr
            </option>
            <option className='text-black' value='mrs'>
              Mrs
            </option>
            <option className='text-black' value='miss'>
              Miss
            </option>
            <option className='text-black' value='sir'>
              Sir
            </option>
            <option className='text-black' value='dr'>
              Dr
            </option>
            <option className='text-black' value='professor'>
              Professor
            </option>
            <option className='text-black' value='dame'>
              Dame
            </option>
            <option className='text-black' value='baroness'>
              Baroness
            </option>
            <option className='text-black' value='lord'>
              Lord
            </option>
          </select>
        </div>

        <section className='grid gap-2 md:flex md:justify-between'>
          {/* Email */}
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email Address'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
              required
            />
          </div>

          {/* Username */}
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
              required
            />
          </div>
        </section>
        {/* Password */}
        <section className='grid gap-2 md:flex'>
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
              required
            />
          </div>

          {/* Confirm Password */}
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='confirmPassword'>Confirm:</label>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              placeholder='Confirm Password'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
              required
            />
          </div>
        </section>

        <section className='grid gap-2 md:flex'>
          {/* FirstName */}
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='firstName'>FirstName:</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='FirstName'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
              required
            />
          </div>

          {/* LastName */}
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='lastName'>LastName:</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='LastName'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
              required
            />
          </div>
        </section>

        <section className='grid gap-2 md:flex'>
          {/* DateOfBirth */}
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='dob'>Date Of Birth:</label>
            <input
              type='date'
              name='dob'
              id='dob'
              placeholder='DateOfBirth'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
              required
            />
          </div>

          {/* Gender */}
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='gender'>Gender:</label>
            <select
              id='gender'
              name='gender'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
            >
              <option className='text-black' defaultValue=''>
                --
              </option>
              <option className='text-black' value='male'>
                Male
              </option>
              <option className='text-black' value='female'>
                Female
              </option>
              <option className='text-black' value='fluid'>
                Fluid
              </option>
              <option className='text-black' value='non-binary'>
                Non-binary
              </option>
              <option className='text-black' value='other'>
                Other
              </option>
            </select>
          </div>
        </section>

        {/* ProfileImage */}
        <div className='w-full grid grid-flow-col justify-between'>
          <label htmlFor='profileImage'>Profile Pic:</label>
          <input
            type='url'
            name='profileImage'
            id='profileImage'
            placeholder='ProfileImage'
            onChange={handleChange}
            className='bg-neo-in ml-4 p-1'
          />
        </div>

        <section className='grid gap-2 md:flex'>
          {/* City */}
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='city'>City:</label>
            <input
              type='text'
              name='city'
              id='city'
              placeholder='City'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
            />
          </div>

          {/* Country */}
          <div className=''>
            {/* <CountrySelect handleChange={handleChange} /> */}
          </div>
        </section>

        <section className='grid gap-2 md:flex'>
          {/* University */}
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='university'>University:</label>
            <input
              type='text'
              name='university'
              id='university'
              placeholder='University'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
            />
          </div>

          {/* Profession */}
          <div className='w-full grid grid-flow-col justify-between'>
            <label htmlFor='profession'>Profession:</label>
            <input
              type='text'
              name='profession'
              id='profession'
              placeholder='Profession'
              onChange={handleChange}
              className='bg-neo-in ml-4 p-1'
            />
          </div>
        </section>

        <div className='grid'>
          <label htmlFor='bio'>Bio</label>
          <textarea
            name='bio'
            onChange={handleChange}
            id='bio'
            rows={5}
            className='p-1 bg-neo-in mt-1'
          ></textarea>
        </div>

        {/* Confirm terms */}
        <div className='form-group form-check ml-1'>
          <input
            type='checkbox'
            className='form-check-input h-4 w-4 border border-main-colour rounded-sm bg-white checked:bg-main-colour checked:border-gray-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            id='agreedToTerms'
            // checked={agreedToTerms}
            // value={agreedToTerms}
            // onChange={checkHandler}
          />
          <label
            className='form-check-label inline-block'
            htmlFor='agreedToTerms'
          >
            I agree with the{' '}
            <Link
              to='/terms-and-conditions'
              className='text-hyperlink-blue dark:text-hyperlink-blue hover:underline'
            >
              terms and conditions
            </Link>
            .
          </label>
        </div>

        {/* Newsletter */}
        <div className='flex form-group form-check ml-1'>
          <input
            type='checkbox'
            className='form-check-input h-4 w-4 border border-main-colour rounded-sm bg-white checked:bg-main-colour checked:border-gray-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            id='agreedToTerms'
            // checked={agreedToTerms}
            // value={agreedToTerms}
            // onChange={checkHandler}
          />
          <label
            className='form-check-label inline-block'
            htmlFor='agreedToTerms'
          >
            Uncheck this box if you do not wish to receive announcements and
            reminders for the launch date.
          </label>
        </div>

        <div className='mt-2'>
          <input
            className='bg-neo-alt rounded w-full p-2'
            type='submit'
            value='submit'
          />
        </div>
      </section>
    </form>
  );
}

export default RegisterForm;
