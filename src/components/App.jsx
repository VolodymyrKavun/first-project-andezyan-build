import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'utils/Loader';
// import Buttons from './Buttons';
import Header from './Header';
import BurgerMenu from './BurgerMenu';
// import SignIn from '../page/SignIn/SignIn';
// import SignUp from '../page/SingUp/SingUp';
// import StartPage from 'page/StartPage';
// import GalleryProjects from './GalleryProjects';

const SignIn = lazy(() => import('../page/SignIn/SignIn'));
const SignUp = lazy(() => import('../page/SingUp/SingUp'));
const Home = lazy(() => import('../page/Home'));
const GalleryProjects = lazy(() => import('./GalleryProjects'));
// const Buttons = lazy(() => import('./Buttons'));

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<GalleryProjects />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="//burger" element={<BurgerMenu />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
