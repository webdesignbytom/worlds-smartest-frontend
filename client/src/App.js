import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
// Analytics
import ReactGA from 'react-ga';
// Pages
import HomePage from './pages/home/HomePage';
import RegisterPage from './users/register/RegisterPage';
import LoginPage from './users/login/LoginPage';
import AboutPage from './pages/about/AboutPage';
import Error404 from './pages/error/Error404';
import BetaTestQuestions from './pages/beta/BetaTestQuestions';
import PrivacyPolicy from './pages/policy/PrivacyPolicy';

function App() {
  ReactGA.initialize('G-2DWCKVD9WK');
  ReactGA.pageview('/');

  useEffect(() => {
    console.log('doc', document.location) // urls of page
    console.log('cookie', document.cookie)
    console.log('nav', navigator.userAgent) // browser
    console.log('nav', navigator.language) // language
  }, [])
  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/sign-up' index element={<RegisterPage />} />
      <Route path='/login' index element={<LoginPage />} />
      <Route path='/quiz-information' index element={<AboutPage />} />
      <Route
        path='/beta-test-questions'
        index
        element={<BetaTestQuestions />}
      />

      {/* Util Routes */}
      <Route path='/terms-and-conditions' element={<PrivacyPolicy />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
    //   <Route path='/contact' element={<Contact />} />

    //   {/* Secure routes */}
    //   <Route
    //     path='/admin'
    //     element={
    //       <AuthenticateAdmin>
    //         <AdminPanel />
    //       </AuthenticateAdmin>
    //     }
    //   />
    //   <Route
    //     path='/development'
    //     element={
    //       <AuthenticateDeveloper>
    //         <DeveloperPanel />
    //       </AuthenticateDeveloper>
    //     }
    //   />

    //   {/* User Routes */}
    //   <Route path='/login' element={<Login />} />
    //   <Route path='/register' element={<Register />} />
    //   <Route path='/reset-lost-password' element={<ResetPassword />} />

    //   <Route
    //     path='/account'
    //     element={
    //       <AuthenticateUser>
    //         <Account />
    //       </AuthenticateUser>
    //     }
    //   />

    //   {/* User data */}
    //   <Route path='users/verify/:userId/:uniqueString' element={<Verify />} />

    //   <Route
    //     path='users/:userId/update-password'
    //     element={<UpdatePassword />}
    //   />
    //   <Route
    //     path='users/reset-lost-password/:userId/:uniqueString'
    //     element={<EnterNewPassword />}
    //   />
    // </Routes>
  );
}

export default App;
