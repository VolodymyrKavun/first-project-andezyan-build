import Socials from 'components/Socials/Socials';
import React from 'react';

import styles from './StartPage.module.scss';

const StartPage = () => {
  return (
    <>
      <div className={styles.wrapperStartP}>
        <section className={styles.textStartP}>
          <div className={styles.socialsWrapper}>
            <Socials />
          </div>
        </section>
      </div>
    </>
  );
};

export default StartPage;
