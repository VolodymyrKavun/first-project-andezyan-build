import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'utils/Loader';
import Header from './Header';

const Home = lazy(() => import('../page/Home'));
const GalleryProjects = lazy(() => import('./GalleryProjects'));
// const Practic = lazy(() => import('../page/Practic'));
const Contacts = lazy(() => import('../page/Contacts'));
const NotFound = lazy(() => import('../page/NotFound'));

const InfoObject = lazy(() => import('../components/InfoObject'));
const Video = lazy(() => import('./VideoPage'));

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/practic" element={<Practic />} /> */}
          <Route path="/gallery" element={<GalleryProjects />} />
          <Route path="/gallery/:group" element={<InfoObject />} />
          <Route path="/video" element={<Video />} />

          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
