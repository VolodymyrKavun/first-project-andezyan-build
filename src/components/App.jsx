import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'utils/Loader';
import Header from './Header';

const Home = lazy(() => import('../page/Home'));
const GalleryProjects = lazy(() => import('./GalleryProjects'));
const Practic = lazy(() => import('../page/Practic'));
const Contacts = lazy(() => import('../page/Contacts'));

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/practic" element={<Practic />} /> */}
          <Route path="/gallery" element={<GalleryProjects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
