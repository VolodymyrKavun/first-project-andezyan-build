import React from 'react';
import { ContactLink } from './HeaderContactsInfo.styled';

const HeaderContactsInfo = () => {
  return (
    <>
      <div>
        <ContactLink href="tel:+380675909988">+38 067 590 99 88</ContactLink>
      </div>
      <div>
        <ContactLink href="mailto: aoandezyan@gmail.com">
          aoandezyan@gmail.com
        </ContactLink>
      </div>
    </>
  );
};

export default HeaderContactsInfo;
