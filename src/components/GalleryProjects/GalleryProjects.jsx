import React from 'react';

import imagesGalery from 'data/imagesGalery/imagesGalery';

import {
  ContainerList,
  MovieCardItem,
  MovieImage,
  MovieListUl,
  MovieTitle,
  LinkToProject,
} from './GalleryProjects.styled';
import { useLocation } from 'react-router-dom';

const GalleryProjects = () => {
  const location = useLocation();

  return (
    <>
      <ContainerList>
        <MovieListUl>
          {imagesGalery.map(el => {
            return (
              <MovieCardItem key={el.id}>
                <LinkToProject to={`/data/${el.id}`} state={{ from: location }}>
                  <MovieImage src={el.url} alt={el.title} />
                  <MovieTitle>{el.title}</MovieTitle>
                </LinkToProject>
              </MovieCardItem>
            );
          })}
        </MovieListUl>
      </ContainerList>
    </>
  );
};

export default GalleryProjects;
