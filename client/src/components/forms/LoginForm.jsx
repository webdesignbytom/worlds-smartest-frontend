import React from 'react';

function LoginForm() {
  const handleChange = (event) => {};

  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleLogin} className='w-full'>
      <section className='w-full grid gap-2 mt-2'>
        {/* Email */}
        <div className='w-full grid grid-flow-col justify-between items-center'>
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
        {/* Password */}
        <div className='w-full grid grid-flow-col justify-between items-center'>
          <label htmlFor='password'>Password:</label>
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
            className='bg-neo-alt rounded w-full p-2'
            type='submit'
            value='submit'
          />
        </div>
      </section>
    </form>
  );
}

export default LoginForm;
