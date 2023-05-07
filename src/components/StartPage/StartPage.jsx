import Socials from 'components/Socials/Socials';
import React from 'react';

import styles from './StartPage.module.scss';

const StartPage = () => {
  return (
    <>
      {/* <div className={styles.wrapperStartP}> */}
      <section className={styles.wrapperStartP}>
        {/* <h1 className={styles.titleStartP}>
          Будівництво ангарів та складів під ключ в Україні.
        </h1> */}
        <div className={styles.socialsWrapper}>
          <Socials />
        </div>
      </section>
      {/* </div> */}
    </>
  );
};

export default StartPage;
