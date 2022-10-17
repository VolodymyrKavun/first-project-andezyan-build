import styled from '@emotion/styled';

export const BlueBg = styled.div`
  position: fixed;
  background-image: url('https://stroy-angar.com.ua/images/odessa20/5.jpg');
  background-size: cover;

  background-color: #58aff6;
  top: 0;
  height: 100%;
  width: 100vw;
  z-index: -1;
  overflow-x: hidden;
`;

export const WhiteBg = styled.div`
  position: absolute;
  top: 0;
  background-color: #fff;
  min-height: 500px;
  margin: 240px 0px;
  width: 100vw;
  height: 80vh;
  transform: skewY(5deg);
  z-index: -1;

  box-shadow: -2px -5px 5px 0px rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  margin: 250px 10vw;
  max-width: 60vw;
  background-color: transparent;
`;
