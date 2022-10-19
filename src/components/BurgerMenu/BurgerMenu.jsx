import React from 'react';
// import css from './BurgerMenu.module.css';
import css from './NewStyle.module.css';
import LinksNav from 'components/LinksNav';

const BurgerMenu = () => {
  return (
    <>
      <div id={css.menu}>
        <input type="checkbox" id={css.chekboxBurger} />
        <span id={css.buttonBurger}></span>
        <nav>
          <LinksNav />
        </nav>
      </div>

      {/* todo */}
      {/* <div className={css.menuWrap}>
        <input type="checkbox" className={css.toggler} />
        <div className={css.hamburger}>
          <div></div>
        </div>
        <div className={css.menu}>
          <div>
            <LinksNav />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default BurgerMenu;
