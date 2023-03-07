import React from 'react';
import { useState } from 'react';
import css from './Navbar.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import { navData } from '../../data/navigation.data';
import Image from 'components/Image';
// import Socials from 'components/Socials/Socials';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  return (
    <header className={css.headerNav}>
      <div className={css.containerNav}>
        <div className={css.boxNav}>
          <Image
            src=""
            alt="logo"
            width={50}
            height={50}
            className={css.headerLogoImageNav}
          />

          <h1 className={css.titleStartP}>АО-Андезян</h1>

          <ul
            className={
              nav ? [css.menuNav] : [css.menuNav, css.activeNav].join(' ')
            }
          >
            {navData.map(el => (
              <li key={el.title}>
                <NavLink
                  to={el.path}
                  onClick={() => setNav(!nav)}
                  className={({ isActive }) =>
                    isActive ? css.activeNav : css.navLinkNav
                  }
                >
                  {el.title}
                </NavLink>
                {/* <a href="##">Home</a> */}
              </li>
            ))}
          </ul>
          {/* <Socials /> */}
          <div onClick={() => setNav(!nav)} className={css.mobileBtnNav}>
            {nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
