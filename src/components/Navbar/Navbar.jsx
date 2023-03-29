import React from 'react';
import { useState } from 'react';
import css from './Navbar.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { navData } from '../../data/navigation.data';
import Image from 'components/Image';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const location = useLocation();

  return (
    <header className={css.headerNav}>
      <div className={css.containerNav}>
        <div className={css.boxNav}>
          <NavLink
            className={css.linkGallery}
            to={`/`}
            state={{ from: location }}
          >
            <Image
              src=""
              alt="Main logo"
              width="56px"
              height="56px"
              className={css.headerLogoImageNav}
            />
          </NavLink>

          <h1 className={css.titleStartP}>ОА-Андезян</h1>
          <ul
            className={
              nav ? [css.menuNav] : [css.menuNav, css.activeNav].join(' ')
            }
          >
            {navData.map(el => (
              <li key={el.id}>
                <NavLink
                  to={el.path}
                  onClick={() => setNav(!nav)}
                  className={({ isActive }) =>
                    isActive ? css.activeNav : css.navLinkNav
                  }
                >
                  {el.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div onClick={() => setNav(!nav)} className={css.mobileBtnNav}>
            {nav ? <AiOutlineMenu size={46} /> : <AiOutlineClose size={46} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
