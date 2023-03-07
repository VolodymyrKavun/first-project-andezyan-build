import React from 'react';
import css from './ButtonSend.module.css';

const ButtonSend = () => {
  return (
    <>
      <div className={css.buttonWraper}>
        <button>
          <div className={css.wrapper}>
            <i className={css.bi + css.biSend}></i>
          </div>
          <span>Send</span>
        </button>
      </div>
    </>
  );
};

export default ButtonSend;
