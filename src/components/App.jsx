import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Buttons from './Buttons';
import Header from './Header';
import SignIn from '../page/SignIn/SignIn';
import SignUp from '../page/SingUp/SingUp';
import StartPage from 'page/StartPage';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Buttons />} />
        <Route path="/home" element={<StartPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
