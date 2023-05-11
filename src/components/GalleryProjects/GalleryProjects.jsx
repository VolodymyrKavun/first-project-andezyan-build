import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import Image from 'components/Image';

import { imagesGalery } from 'data/imagesGalery';

import css from './GalleryProjects.module.scss';

const GalleryProjects = () => {
  const location = useLocation();

  return (
    <>
      <section>
        <div className={css.wrapperGallery}>
          <ul className={css.listGallery}>
            {imagesGalery.map(el => {
              return (
                <li className={css.itemGallery} key={el.id}>
                  <NavLink
                    className={css.linkGallery}
                    to={`/gallery/${el.group}`}
                    state={{ from: location }}
                    title="Вкладена маршрутизація"
                  >
                    <Image
                      className={css.imgGallery + ' ' + css.darkness}
                      src={el.url}
                      alt={el.title}
                    />
                    <h2 className={css.titleGallery}>{el.title}</h2>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default GalleryProjects;
