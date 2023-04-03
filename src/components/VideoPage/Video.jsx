import React from 'react';
import { videosData } from 'data/videos.data.js';

// import css from './Video.module.scss';
import css from '../../components/GalleryProjects/GalleryProjects.module.scss';

const Video = () => {
  return (
    <div className={css.wrapperGallery}>
      <ul className={css.listGallery}>
        {videosData.map(el => {
          return (
            <li className={css.itemGallery} key={el.id}>
              <iframe
                className={css.imgGallery}
                width="100%"
                height="100%"
                src={el.src}
                title={el.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <p className={css.titleGallery}>{el.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Video;
