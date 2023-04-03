import React from 'react';

import css from './CustomLoader.module.scss';

const CustomLoader = () => {
  return (
    <>
      <div className={css.loader}>
        <div className={css.face}>
          <div className={css.circle}></div>
        </div>
        <div className={css.face}>
          <div className={css.circle}></div>
        </div>
      </div>
    </>
  );
};

export default CustomLoader;
