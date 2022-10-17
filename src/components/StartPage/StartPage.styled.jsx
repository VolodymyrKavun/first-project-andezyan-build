import styled from '@emotion/styled/macro';

export const PageContainer = styled.div`
  background-image: url('	https://stroy-angar.com.ua/images/1__highfon.jpg');
  background-size: cover;
`;

export const Title = styled.h1`
  color: #faea10;
`;

export const ImageWraper = styled.div`
  display: flex;
  justify-content: flex-start
  align-items: center;
`;

export const Img = styled.img`
  @media screen and (max-width: 768px) {
    filter: drop-shadow(8px 8px 4px #faea10);
  }
  /* background-color: #1f5156; */
  /* filter: drop-shadow(8px 8px 4px #faea10); */
  height: 200px;
  width: 200px;
  margin: 0;
  padding: 0;
`;
