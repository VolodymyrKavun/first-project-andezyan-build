import Image from 'components/Image';
import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByType } from 'utils/GetProduct/GetProduct';
import { typeData } from 'data/groupsImagesDetails.data';
import Modal from 'components/Modal/Modal';

// import css from './InfoObject.module.scss';
import css from '../GalleryProjects/GalleryProjects.module.scss';

const InfoObject = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const { group } = useParams();

  const products = getProductByType(group, typeData);

  const handleClick = item => {
    setClickedImg(item.url);
  };

  return (
    <>
      <div className={css.wrapperGallery}>
        <ul className={css.listGallery}>
          {products.map(item => {
            return (
              <li className={css.itemGallery} key={item.id}>
                <Image
                  className={css.imgGallery}
                  src={item.url}
                  alt={item.title}
                  onClick={() => handleClick(item)}
                  title="ОА Андезян"
                  loading="eager"
                />

                {/* <p className={css.titleGallery}>{item.title}</p>   */}
              </li>
            );
          })}
        </ul>
        {clickedImg && (
          <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
        )}
      </div>
    </>
  );
};

export default InfoObject;
