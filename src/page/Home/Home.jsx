import React from 'react';
import StartPage from 'components/StartPage';
import LayoutPages from 'utils/LayoutPages/LayoutPages';

const Home = () => {
  return (
    <>
      <LayoutPages
        title={'Будівництво ангарів та складів під ключ в Україні'}
        description={
          'Лідер на ринку будівництва ангарів, СТО, автомобільних боксів, автомийок, складів, складів для зберігання сільськогосподарської техніки та продукці'
        }
        url={'https://andezyan-build.netlify.app/'}
      />

      <StartPage />
    </>
  );
};

export default Home;
