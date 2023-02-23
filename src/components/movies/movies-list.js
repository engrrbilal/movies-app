import React from 'react';
import { useTranslation } from 'react-i18next';
import MoviesListItem from './movie-list-item';
import { SkeletonCard } from '../common/skeleton';

export const MoviesList = ({moviesList, isLoading}) => {
  const [t] = useTranslation('movies');
  
  if (!isLoading && moviesList?.length<=0) {
     return <p>{t('movie.noListData')}</p>
  }

  return (
      <div className="row movies-list">
        {
          isLoading ?
              <SkeletonCard/> :
                  moviesList?.length > 0 && moviesList?.map((movie) => (
                  <div key={movie?.id} className="col-lg-2 col-md-4 col-sm-4 col-6 mb-4">
                      <MoviesListItem movie={movie} isLoading={isLoading}/>
                  </div>
              ))
        }
        
      </div>
  );
};
