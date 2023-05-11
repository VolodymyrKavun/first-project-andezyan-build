import React from 'react';
import GalleryProjects from 'components/GalleryProjects/GalleryProjects';
// import { Helmet } from 'react-helmet-async';
import LayoutPages from 'utils/LayoutPages/LayoutPages';

const Gallery = () => {
  return (
    <>
      <LayoutPages
        title={"Фотогалерея об'єктів компанії ОА Андезян."}
        description={
          'Технологія будівництва є незамінною для сучасних магазинів, маркетів, автомийок, СТО, складів, автосалонів та будинків з металоконструкцій.'
        }
        url={'https://andezyan-build.netlify.app/gallery'}
      />
      {/* <Helmet>
        <title>Фотогалерея об'єктів компанії ОА Андезян</title>
        <meta
          name="description"
          content="Технологія будівництва є незамінною для сучасних магазинів, маркетів, автомийок, СТО, складів, автосалонів та будинків з металоконструкцій."
        />
        <link rel="canonical" href="/first-project-andezyan-build/gallery" />
      </Helmet> */}
      <GalleryProjects />
    </>
  );
};

export default Gallery;
