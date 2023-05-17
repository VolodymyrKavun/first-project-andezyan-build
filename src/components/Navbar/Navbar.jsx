import React from 'react';
import { useState } from 'react';
import css from './Navbar.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { navData } from '../../data/navigation.data';
// import Image from 'components/Image';
import logo from '../../images/logo2.png';

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
            title="Головна сторінка"
          >
            {/* <Image
              src=""
              alt="Головне лого"
              width="56px"
              height="56px"
              title="ОА Андезян"
            /> */}
            <img
              src={logo}
              alt="Головне лого"
              width="100%"
              height="100%"
              title="ОА Андезян"
              loading="eager"
            />
            {/* <object
              data={logo}
              type="image"
              width="56px"
              height="56px"
              aria-label="Main logo"
            ></object> */}
            {/* <embed src={logo} width="56px" height="56px" type="image/png" /> */}
          </NavLink>

          <h1 className={css.titleStartP}>ОА-Андезян</h1>
          <ul className={nav ? css.menuNav : css.menuNav + ' ' + css.activeNav}>
            {navData.map(el => (
              <li key={el.id}>
                <NavLink
                  to={el.path}
                  title="Маршрутизація сайту"
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
            {nav ? <AiOutlineMenu size={48} /> : <AiOutlineClose size={48} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
