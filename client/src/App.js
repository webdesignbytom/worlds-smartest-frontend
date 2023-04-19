import { Routes, Route } from 'react-router-dom';
// Analytics
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-2DWCKVD9WK');
  ReactGA.pageview('/');
  ReactGA.pageview('/contact');
  ReactGA.pageview('/design');
  ReactGA.pageview('/portfolio');
  ReactGA.pageview('/login');
  ReactGA.pageview('/store');
  ReactGA.pageview('/new-project');
  return (
    <>Hello</>
    // <Routes>
    //   <Route path='/' index element={<IndexPage />} />
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
