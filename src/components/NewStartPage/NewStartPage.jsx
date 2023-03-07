import React from 'react';
import { BlueBg, WhiteBg, Content } from './NewStartPage.styled';

import { ImageWraper, Img } from 'components/StartPage/StartPage.styled';
import InfoAboutCompany from 'components/InfoAboutCompany';

const NewStartPage = () => {
  return (
    <>
      <BlueBg></BlueBg>
      <WhiteBg></WhiteBg>
      <Content>
        <section>
          <h4>
            <dfn>
              Будівельна компанія <mark>«АО.-Андезян»</mark>
            </dfn>
            лідер у сфері будівництва ангарів, будівництва швидкомонтованих
            будівель, виготовлення металоконструкцій та малих архітектурних форм
            (<abbr>МАФ</abbr>).
          </h4>
          <ImageWraper>
            <Img
              src="https://stroy-angar.com.ua/images/logo2.png"
              alt="АО АНДЕЗЯН"
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'column',
              }}
            >
              <div>
                <div>Телефон:</div>
                <a
                  style={{
                    textDecoration: 'none',
                    color: '#1f5156',
                    fontSize: 14,
                  }}
                  href="tel:+380675909988"
                >
                  +38 067 590 99 88
                </a>
              </div>
              <div>
                <div>Пошта:</div>

                <a
                  style={{
                    textDecoration: 'none',
                    color: '#1f5156',
                    fontSize: 14,
                  }}
                  href="mailto: aoandezyan@gmail.com"
                >
                  aoandezyan@gmail.com
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
