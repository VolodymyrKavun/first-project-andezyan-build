import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo2.png';

const Image = ({ src, alt, className, width, height }) => {
  if (!src) {
    src = logo;
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading="lazy"
      />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  src: 'https://stroy-angar.com.ua/images/logo2.png',
  alt: 'Default image',
  className: '',
  width: '56px',
  height: '56px',
};

export default Image;
