import React from 'react';

import css from './PhoneNumbers.module.scss';
import { numbers } from 'data/phoneNumbers.data';

const PhoneNumbers = () => {
  return (
    <>
      <h2 className={css.titlePhoneNumber + ' ' + css.orangePhoneNumber}>
        Контакти:
      </h2>
      <ul className={css.listPhoneNumber}>
        {numbers.map(el => (
          <li className={css.itemAdressPhoneNumber} key={el.id}>
            <a
              href={el.link}
              target={'_blanc'}
              className={css.linkPhoneNumber}
              rel={el.rel}
              title="Контактна інформація"
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
