import React from 'react';
import { PageContainer, Title, ImageWraper, Img } from './StartPage.styled';
import InfoAboutCompany from 'components/InfoAboutCompany';

const StartPage = () => {
  return (
    <>
      <PageContainer>
        <Title style={{ margin: 0, padding: 50 }}>АО-Андезян</Title>
        <ImageWraper>
          <Img
            src="https://stroy-angar.com.ua/images/logo2.png"
            alt="АО АНДЕЗЯН"
          />
        </ImageWraper>
      </PageContainer>
      <section>
        <h4>
          Будівельна компанія «АО.-Андезян» лідер у сфері будівництва ангарів,
          будівництва швидкомонтованих будівель, виготовлення металоконструкцій
          та малих архітектурних форм (МАФ).
        </h4>
        <InfoAboutCompany />
      </section>
    </>
  );
};

export default StartPage;
