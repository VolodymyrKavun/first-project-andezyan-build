import React from 'react';

import styles from './Socials.module.scss';
import { socialsData } from '../../data/socials.data';

const Socials = () => {
  return (
    <>
      <div className={styles.socialWrapper}>
        <ul className={styles.socialList}>
          {socialsData.map((socialItems, idx) => (
            <li key={idx} className={styles.socialItem}>
              <a
                href={socialItems.path}
                target={'_blanc'}
                className={styles.socialLink}
              >
                {socialItems.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Socials;
