import * as React from 'react';

import {
  // HeaderWrapper,
  NavLinkStyled,
  MainContainer,
  Navbar,
  NavContainer,
  NavMenu,
  NavItem,
} from './Header.styled';

const Header = () => {
  return (
    <>
      <MainContainer>
        <Navbar>
          <NavContainer>
            <NavMenu>
              <NavItem>
                <NavLinkStyled to="/">Gallery</NavLinkStyled>
                <NavLinkStyled to="/home">Головна</NavLinkStyled>

                <NavLinkStyled to="/login">Login</NavLinkStyled>
                <NavLinkStyled to="/signUp">Registration</NavLinkStyled>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Navbar>
      </MainContainer>

      {/* <NavBar>
        <HeaderWrapper>
          <NavLinkStyled to="/"> Home Page</NavLinkStyled>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
          <NavLinkStyled to="/signUp">Registration</NavLinkStyled>
        </HeaderWrapper>
      </NavBar> */}
    </>
  );
};

export default Header;
