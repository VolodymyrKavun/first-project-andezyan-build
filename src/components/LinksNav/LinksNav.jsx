import React from 'react';
import { NavLinkStyled } from 'components/Header/Header.styled';
import HeaderContactsInfo from 'components/HeaderContactsInfo';

const LinksNav = () => {
  return (
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
  );
};

export default LinksNav;
