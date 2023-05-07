import React from 'react';
import { Helmet } from 'react-helmet-async';

const LayoutPages = ({ title, description, url }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <link rel="canonical" href={url} /> */}
      </Helmet>
    </>
  );
};

export default LayoutPages;
