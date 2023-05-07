import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import client from '../../utils/axios/client';

function LoginForm() {
  const { setUser } = useContext(UserContext);
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  let navigate = useNavigate();

  const homePage = () => {
    navigate('/', { replace: true });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('login');
    console.log('data', loginFormData);

    client
      .post('/login', loginFormData, false)
      .then((res) => {
        console.log('res', res.data);
        console.log('res.data.data.token', res.data.data.token);
        localStorage.setItem(
          process.env.REACT_APP_USER_TOKEN,
          res.data.data.token
        );
        setUser(res.data.data.existingUser);
      })
      .then(() => homePage())

      .catch((err) => {
        console.error('Unable to login', err);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={handleLogin}
      className='w-full lg:w-1/3 lg:mx-auto lg:mt-20'
    >
      <section className='w-full grid gap-2 mt-2'>
        {/* Email */}
        <div className='w-full grid text-center mb-2'>
          <label htmlFor='email' className='mb-2'>
            Email:
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email Address'
            onChange={handleChange}
            className='bg-neo-in p-1'
            required
          />
        </div>
        {/* Password */}
        <div className='w-full grid text-center mb-2'>
          <label htmlFor='password' className='mb-2'>
            Password:
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            onChange={handleChange}
            className='bg-neo-in p-1'
            required
          />
        </div>

        <div className='mt-2'>
          <input
            className='bg-neo-alt rounded w-full p-2 no__highlights'
            type='submit'
            value='submit'
          />
        </div>
      </section>
    </form>
  );
}

export default LoginForm;
