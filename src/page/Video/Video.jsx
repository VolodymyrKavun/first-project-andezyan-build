import React from 'react';
import { videosData } from 'data/videos.data.js';

// import css from './Video.module.scss';
import css from '../../components/GalleryProjects/GalleryProjects.module.scss';

const Video = () => {
  return (
    // <div className={css.wrapperVideo}>
    //   <ul className={css.listVideo}>
    //     {videosData.map(el => (
    //       <li key={el.id} className={css.itemVideo}>
    //         <video className={css.linkVideo} src={el.src} />
    //         <p>{el.description}</p>
    //       </li>
    //     ))}

    //     <iframe
    //         width="100%"
    //         height="350"
    //         src="https://www.youtube.com/embed/qOlYAoErrOY"
    //         title='Реклама "Строительная компания АО Андезян"'
    //         frameborder="0"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //         allowfullscreen
    //       ></iframe>
    //   </ul>
    // </div>

    // ! After

    <div className={css.wrapperGallery}>
      {/* <ul className={css.listGallery}>
        {videosData.map(el => {
          return (
            <li className={css.itemGallery} key={el.id}>
              <video
                className={css.imgGallery}
                src={el.src}
                width={el.width}
                height={el.height}
                controls={el.controls}
              />
              <p className={css.titleGallery}>{el.description}</p>
            </li>
          );
        })}
      </ul> */}

      {/* !YouTube */}

      <ul className={css.listGallery}>
        {videosData.map(el => {
          return (
            <li className={css.itemGallery} key={el.id}>
              <iframe
                className={css.imgGallery}
                width={el.width}
                height={el.height}
                src={el.src}
                title={el.title}
                frameBorder={el.frameborder}
                allow={el.allow}
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
