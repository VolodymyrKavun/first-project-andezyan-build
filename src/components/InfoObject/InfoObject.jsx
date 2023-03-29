import Image from 'components/Image';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductByType } from 'utils/GetProduct/GetProduct';
import { typeData } from 'data/groupsImagesDetails.data';

// import css from './InfoObject.module.scss';
import css from '../GalleryProjects/GalleryProjects.module.scss';

const InfoObject = () => {
  const { group } = useParams();

  const products = getProductByType(group, typeData);

  return (
    <>
      {/* <div className={css.wrapperInfoObj}>
        <ul>
          {products.map(el => (
            <li key={el.id}>
              <Image src={el.url} alt={el.title} className={css.imageInfoObj} />
              <div>
                <h2>{el.title}</h2>
                <p>{el.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      {/* !After */}

      <div className={css.wrapperGallery}>
        <ul className={css.listGallery}>
          {products.map(el => {
            return (
              <li className={css.itemGallery} key={el.id}>
                <Image className={css.imgGallery} src={el.url} alt={el.title} />
                {/* <p className={css.titleGallery}>{el.title}</p> */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default InfoObject;
