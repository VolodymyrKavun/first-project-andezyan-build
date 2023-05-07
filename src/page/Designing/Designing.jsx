import React from 'react';
import DesignDocument from 'components/DesignDocument/DesignDocument';
import LayoutPages from 'utils/LayoutPages/LayoutPages';

// import css from './Designing.module.scss';

const Designing = () => {
  return (
    <>
      <LayoutPages
        title={'Проектна документації, Проектування металоконструкцій'}
        description={
          "Проектування будівельних споруд та об'єктів різного призначення та рівня складності у Києві та Україні. Проектування металоконструкцій."
        }
        // url={'/first-project-andezyan-build/designing'}
      />
      <DesignDocument />
    </>
  );
};

export default Designing;
