import * as React from 'react';

import ContactsInfo from 'components/ContactsInfo';

import {
  HeaderWrapper,
  NavLinkStyled,
  // MainContainer,
  NavBar,
  // NavContainer,
  // NavMenu,
  // NavItem,
} from './Header.styled';

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
          <NavLinkStyled to="/home"> Home Page</NavLinkStyled>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
          <NavLinkStyled to="/signUp">Registration</NavLinkStyled>
          <ContactsInfo />
        </HeaderWrapper>
      </NavBar>
    </>
  );
};

export default Header;
