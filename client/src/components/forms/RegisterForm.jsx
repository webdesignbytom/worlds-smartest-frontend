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
      <section className='grid gap-1'>
        {/* Title */}
        <div>
          <label htmlFor='title'>Title:</label>
          <select
            id='title'
            name='title'
            onChange={handleChange}
            className=''
            required
          >
            <option defaultValue=''>--</option>
            <option value='mr'>Mr</option>
            <option value='mrs'>Mrs</option>
            <option value='miss'>Miss</option>
            <option value='sir'>Sir</option>
            <option value='dr'>Dr</option>
            <option value='professor'>Professor</option>
            <option value='dame'>Dame</option>
            <option value='baroness'>Baroness</option>
            <option value='lord'>Lord</option>
          </select>
        </div>

        <section className='md:flex'>
          {/* Email */}
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email Address'
              onChange={handleChange}
              required
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              onChange={handleChange}
              required
            />
          </div>
        </section>
        {/* Password */}
        <section className='md:flex'>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              placeholder='Confirm Password'
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <section className='md:flex'>
          {/* FirstName */}
          <div>
            <label htmlFor='firstName'>FirstName:</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='FirstName'
              onChange={handleChange}
              required
            />
          </div>

          {/* LastName */}
          <div>
            <label htmlFor='lastName'>LastName:</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='LastName'
              onChange={handleChange}
              required
            />
          </div>
        </section>

        <section className='md:flex'>
          {/* DateOfBirth */}
          <div>
            <label htmlFor='dob'>Date Of Birth:</label>
            <input
              type='date'
              name='dob'
              id='dob'
              placeholder='DateOfBirth'
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label htmlFor='gender'>Gender:</label>
            <select
              id='gender'
              name='gender'
              onChange={handleChange}
              className=''
            >
              <option defaultValue=''>--</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='fluid'>Fluid</option>
              <option value='non-binary'>Non-binary</option>
              <option value='other'>Other</option>
            </select>
          </div>
        </section>

        {/* ProfileImage */}
        <div>
          <label htmlFor='profileImage'>Profile Image:</label>
          <input
            type='text'
            name='profileImage'
            id='profileImage'
            placeholder='ProfileImage'
            onChange={handleChange}
          />
        </div>

       <section className='md:flex'>
         {/* City */}
         <div>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            name='city'
            id='city'
            placeholder='City'
            onChange={handleChange}
          />
        </div>

        {/* Country */}
        <div className=''>
          <CountrySelect handleChange={handleChange} />={' '}
        </div>
        </section>

        <section className='md:flex'>
          {/* University */}
        <div>
          <label htmlFor='university'>University:</label>
          <input
            type='text'
            name='university'
            id='university'
            placeholder='University'
            onChange={handleChange}
          />
        </div>

        {/* Profession */}
        <div>
          <label htmlFor='profession'>Profession:</label>
          <input
            type='text'
            name='profession'
            id='profession'
            placeholder='Profession'
            onChange={handleChange}
          />
        </div></section>

        <div className='grid'>
          <label htmlFor='bio'>Bio</label>
          <textarea
            name='bio'
            onChange={handleChange}
            id='bio'
            cols='50'
            rows='5'
            className='p-1'
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
            className='form-check-label inline-block text-gray-800 dark:text-white'
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
            className='form-check-label inline-block text-gray-800 dark:text-white'
            htmlFor='agreedToTerms'
          >
            Uncheck this box if you do not wish to receive announcements and
            reminders for the launch date.
          </label>
        </div>

        <div>
          <input type='submit' value='submit' />
        </div>
      </section>
    </form>
  );
}

export default RegisterForm;
