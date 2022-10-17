import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// export const MainContainer = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: rgba(0, 0, 0, 0.3);
// `;

// export const Navbar = styled.nav`
//   background-color: #1f5156;
//   height: 60px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1.2rem;
//   position: sticky;
//   top: 0;
//   z-index: 20;
// `;

// export const NavContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 80px;
//   max-width: 1500px;
// `;

// export const NavMenu = styled.ul`
//   display: flex;
//   list-style: none;
//   text-align: center;
//   margin-right: 2rem;
// `;

// export const NavItem = styled.li`
//   line-height: 40px;
//   margin-right: 1rem;
//   &::after {
//     content: '';
//     display: block;
//     height: 3px;
//     width: 0;
//     background: transparent;
//     transition: width 0.7s ease, background-color 0.5s ease;
//   }
//   &:hover &::after {
//     width: 100%;
//     background: #ffdd40;
//   }
// `;

// export const NavLinkStyled = styled(NavLink)`
//   color: #fff;
//   text-decoration: none;
//   padding: 0.5rem 1rem;
//   height: 100%;
//   border-bottom: 3px solid transparent;
//   &.active {
//     color: #ffdd40;
//     border: 1px solid #ffdd40;
//   }
// `;

// todo New Style

// display: flex;
// align-items: center;
// padding: 20px;
// padding-bottom: 20px;
// /* background-image: linear-gradient(90deg, #0f0c29, #302b63, #24243e); */
// background-color: #1f5156;
// height: 50px;

export const NavBar = styled.header`
  @media (max-width: 768px) {
    visibility: hidden;
  }
  font-size: 16px;
  position: fixed;
  width: 100%;
  height: 4em;
  min-width: 20em;
  z-index: 20;

  background-color: #1f5156;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url(../images/header/mobile-chairs-1x.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-color: #1f5156;
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
      url(../images/header/mobile-chairs-2x.jpg); */
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    /* position: fixed; */
    position: fixed;
    top: 0;
    width: 100%;
    height: 3em;

    background-color: #1f5156;
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
      url(../images/header/tablet-chairs-1x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-color: #1f5156;
      /* background-image: linear-gradient(
          rgba(0, 0, 0, 0.56),
          rgba(0, 0, 0, 0.56)
        ),
        url(../images/header/tablet-chairs-2x.jpg); */
    }
  }
  @media screen and (min-width: 1024px) {
    background-color: #1f5156;
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
      url(../images/header/laptop-chairs-1x.jpg); */

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-color: #1f5156;
      /* background-image: linear-gradient(
          rgba(0, 0, 0, 0.56),
          rgba(0, 0, 0, 0.56)
        ),
        url(../images/header/laptop-chairs-2x.jpg); */
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    border-bottom: 2px solid #ffdd40;
  }

  &.active {
    color: #ffdd40;
    border: 1px solid #ffdd40;
  }
`;

// NavLink
/* color: #fff;
   text-decoration: none;
   padding: 0.5rem 1rem;
   height: 100%;
   border-bottom: 3px solid transparent;
 font-family: 'Roboto';
  font-weight: 500;
  font-size: 34px;
  line-height: 1.33;
  min-width: 120px;
  min-height: 44px;
  margin-right: 30px;
  color: grey;
  background-color: transparent;
  border-color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background: #6bdddd;
    box-shadow: 0px 8px 43px rgba(97, 219, 246, 0.6);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transform: translateY(5%) scale(1.1);
  }
  background: linear-gradient(transparent, grey);
  &.active {
    background-color: #6bdddd;
    color: aliceblue;
    `; */
