import React from 'react';

import css from './DesignDocument.module.scss';
import styles from '../GalleryProjects/GalleryProjects.module.scss';

import templatePhoto from '../../images/designing/design_01.jpg';

const DesignDocument = () => {
  return (
    <>
      <div className={styles.wrapperGallery}>
        <a
          className={css.linkDesign}
          href="https://drive.google.com/uc?export=view&id=1-yqCBhwyPmL5AQwWvuZvd4wzsnchzFhc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={css.imageDesign}
            src={templatePhoto}
            alt="Design template"
          />
          {/* <h2 className={css.titleDesign}>Відкрити документ</h2> */}
        </a>
        {/* <div className={css.wrapperGallery}> */}
        {/* <ul className={css.listGallery}>
          <li className={css.itemGallery}>
            <a
              href="https://drive.google.com/uc?export=view&id=1-yqCBhwyPmL5AQwWvuZvd4wzsnchzFhc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={css.imgGallery}
                src={templatePhoto}
                alt="Design template"
              />
            </a>
          </li>
        </ul> */}

        {/* <iframe
          src=""
          name="Проект будівництва"
          title="building_design"
          height="100%"
          width="100%"
          frameBorder="0"
          allowFullScreen
        /> */}
      </div>
    </>
  );
};

export default DesignDocument;
