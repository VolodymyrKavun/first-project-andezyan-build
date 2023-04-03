import React from 'react';

import css from './DesignDocument.module.scss';

const DesignDocument = () => {
  return (
    <>
      <div className={css.wrapperDesign}>
        <iframe
          src="https://drive.google.com/uc?export=view&id=1-yqCBhwyPmL5AQwWvuZvd4wzsnchzFhc"
          name="Проект будівництва"
          title="building_design"
          height="100%"
          width="100%"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default DesignDocument;
