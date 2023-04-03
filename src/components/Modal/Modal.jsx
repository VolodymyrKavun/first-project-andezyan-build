import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import css from './Modal.module.scss';

const Modal = ({ clickedImg, setClickedImg }) => {
  const handleClick = () => {
    setClickedImg(null);
  };
  return (
    <>
      <div className={css.overlay} onClick={handleClick}>
        <img src={clickedImg} alt="biggerPicture" className={css.imgModal} />
        <button className={css.buttonCloseModal} aria-label="Modal close">
          <AiFillCloseCircle size={48} />
        </button>
      </div>
    </>
  );
};

export default Modal;
