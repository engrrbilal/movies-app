import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavBar } from '../../components';
import { SkeletonCard } from '../../components/common/skeleton';
import { MovieDetails } from '../../components/movie/movie-detail';
import { useGetMovieDetailsById } from '../../hooks/movies';
import { getMovieDetails } from '../../store/selectors/entities/movies';
import { upateMovieData } from '../../store/slices/entities/movies';

export const MovieDetailsPage = () => {
  const [t] = useTranslation('movies');
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, data } = useGetMovieDetailsById(id);

  const movie = useSelector(getMovieDetails);

  useEffect(() => {
    if (data?.data) {
      dispatch(upateMovieData(data?.data));
    }
  }, [data]);
  
  return (
    <>
      {(
        <main>
            <NavBar />
            {
                isLoading ? 
                    <SkeletonCard length={1}/> :
                    <MovieDetails movie={ movie }/>
              }
        </main>
      )}
    </>
  )
};
