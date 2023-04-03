import React from 'react';

import css from './Socials.module.scss';
import { socialsData } from '../../data/socials.data';

const Socials = () => {
  return (
    <>
      <div className={css.socialWrapper}>
        <ul className={css.socialList}>
          {socialsData.map(socialItems => (
            <li key={socialItems.id} className={css.socialItem}>
              <a
                href={socialItems.path}
                target="_blank"
                rel="noopener noreferrer"
                className={css.socialLink}
                aria-label={socialItems.description}
              >
                <span className={css.socialIcon}>{socialItems.icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Socials;
