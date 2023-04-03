import React from 'react';
import building_design from '../../documents/document_project_kopilov.pdf';

import css from './DesignDocument.module.scss';

const DesignDocument = () => {
  return (
    <>
      <div className={css.wrapperDesign}>
        <iframe
          src={building_design}
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
