import * as React from 'react';

import ContactsInfo from 'components/HeaderContactsInfo';

import {
  HeaderWrapper,
  NavLinkStyled,
  // MainContainer,
  NavBar,
  // NavContainer,
  // NavMenu,
  // NavItem,
} from './Header.styled';
import BurgerMenu from 'components/BurgerMenu';

const Header = () => {
  return (
    <>
      {/* <MainContainer>
        <Navbar>
          <NavContainer>
            <NavMenu>
              <NavItem>
                <NavLinkStyled to="/home">Головна</NavLinkStyled>
                <NavLinkStyled to="/">Gallery</NavLinkStyled>

                <NavLinkStyled to="/login">Login</NavLinkStyled>
                <NavLinkStyled to="/signUp">Registration</NavLinkStyled>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Navbar>
      </MainContainer> */}

      <NavBar>
        <HeaderWrapper>
          <NavLinkStyled to="/">Головна</NavLinkStyled>
          <NavLinkStyled to="/home">Gallery</NavLinkStyled>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
          <NavLinkStyled to="/signUp">Registration</NavLinkStyled>
          <NavLinkStyled to="/burger">Burger</NavLinkStyled>
          <ContactsInfo />
        </HeaderWrapper>
      </NavBar>
      <BurgerMenu />
    </>
  );
};

export default Header;
