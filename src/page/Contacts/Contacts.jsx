import React from 'react';
// import Socials from 'components/Socials/Socials';
import InfoAboutCompany from 'components/InfoAboutCompany';

import css from './Contacts.module.scss';

const Contacts = () => {
  return (
    <>
      <div className={css.wrapperContacts}>
        {/* <Socials /> */}
        <InfoAboutCompany />
      </div>
    </>
  );
};

export default Contacts;
