import React from 'react';
import { BlueBg, WhiteBg, Content } from './NewStartPage.styled';

import { ImageWraper, Img } from 'components/StartPage/StartPage.styled';
// import ContactsInfo from 'components/HeaderContactsInfo';
import InfoAboutCompany from 'components/InfoAboutCompany';
// import { ContactLink } from 'components/HeaderContactsInfo/HeaderContactsInfo.styled';

const NewStartPage = () => {
  return (
    <>
      <div></div>
      <BlueBg></BlueBg>
      <WhiteBg></WhiteBg>
      <Content>
        <section>
          <h4>
            Будівельна компанія «АО.-Андезян» лідер у сфері будівництва ангарів,
            будівництва швидкомонтованих будівель, виготовлення
            металоконструкцій та малих архітектурних форм (МАФ).
          </h4>
          <ImageWraper>
            <Img
              src="https://stroy-angar.com.ua/images/logo2.png"
              alt="АО АНДЕЗЯН"
            />
            {/* <ContactsInfo /> */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
              }}
            >
              <div>
                <a
                  style={{ textDecoration: 'none', color: '#1f5156' }}
                  href="tel:+380675909988"
                >
                  Телефон: +38 067 590 99 88
                </a>
              </div>
              <div>
                <a
                  style={{ textDecoration: 'none', color: '#1f5156' }}
                  href="mailto: aoandezyan@gmail.com"
                >
                  Пошта: aoandezyan@gmail.com
                </a>
              </div>
            </div>
          </ImageWraper>
          <InfoAboutCompany />
        </section>
      </Content>
    </>
  );
};

export default NewStartPage;
