import React from 'react';

// import InfoAboutCompany from 'components/InfoAboutCompany';

import styles from './StartPage.module.scss';
// import Image from 'components/Image';

const StartPage = () => {
  return (
    <>
      <div className={styles.wrapperStartP}>
        <section className={styles.textStartP}>
          {/* <h1 className={styles.titleStartP}>АО-Андезян</h1> */}
          {/* <p className={styles.subtitleStartP}>
            Будівельна компанія «АО.-Андезян» лідер у сфері будівництва ангарів.
            {/* будівництва швидкомонтованих будівель, виготовлення
            металоконструкцій та малих архітектурних форм (<abbr>МАФ</abbr>). 
          </p> */}
          {/* <InfoAboutCompany /> */}
        </section>
      </div>
    </>
  );
};

export default StartPage;
