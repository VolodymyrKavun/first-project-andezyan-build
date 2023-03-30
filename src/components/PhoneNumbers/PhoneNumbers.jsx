import React from 'react';

import css from './PhoneNumbers.module.scss';
import { numbers } from 'data/phoneNumbers.data';

const PhoneNumbers = () => {
  return (
    <>
      <h3 className={css.titlePhoneNumber + ' ' + css.orangePhoneNumber}>
        Контакти:
      </h3>
      <ul className={css.listPhoneNumber}>
        {numbers.map(el => (
          <li className={css.itemAdressPhoneNumber} key={el.id}>
            <a
              href={el.link}
              target={'_blanc'}
              className={css.linkPhoneNumber}
              rel={el.rel}
            >
              <span className={css.iconPhoneNumber}>{el.icon}</span>
              {el.number}
              <span className={css.hightOrangePhoneNumber}>{el.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhoneNumbers;
