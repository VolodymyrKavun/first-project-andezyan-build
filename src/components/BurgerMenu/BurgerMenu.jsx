import React from 'react';
import css from './BurgerMenu.module.css';
import { NavLinkStyled } from 'components/Header/Header.styled';
import HeaderContactsInfo from 'components/HeaderContactsInfo';

const BurgerMenu = () => {
  return (
    <>
      <div className={css.menuWrap}>
        <input type="checkbox" className={css.toggler} />
        <div className={css.hamburger}>
          <div></div>
        </div>
        <div className={css.menu}>
          <div>
            <div>
              <ul>
                <li>
                  <NavLinkStyled to="/">Головна</NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to="/home">Gallery</NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to="/login">Login</NavLinkStyled>
                </li>
                <li>
                  <NavLinkStyled to="/signUp">Registration</NavLinkStyled>
                </li>
                <li>
                  <HeaderContactsInfo />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <header className={css.showcase}>
        <div className={css.container.showcaseInner}>
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maiores sint impedit delectus quam molestiae explicabo cum facere
            ratione veritatis.
          </p>
          <a href="/" className={css.btn}>
            Read More
          </a>
        </div>
      </header> */}
    </>
  );
};

export default BurgerMenu;
