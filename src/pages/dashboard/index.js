import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { 
  NavBar ,
  Search,
  MoviesList,
  CustomPagination,
  CategorySelect
} from '../../components';
import { getMoviesType } from '../../store/selectors/features/movies';
import { getMoviesList, getMoviesPagination } from '../../store/selectors/entities/movies';
import { useGetMovies } from '../../hooks';
import { updateMoviesListData, updatePagination } from '../../store/slices/entities/movies';

export const Dashboard = () => {
  const [t] = useTranslation('movies');
  const dispatch= useDispatch();
  const moviesList = useSelector(getMoviesList);
  const pagination = useSelector(getMoviesPagination);
  const moviesType = useSelector(getMoviesType);
  const { isLoading, data } = useGetMovies({...pagination, moviesType});

  useEffect(() => {
    if (data?.data) {
      dispatch(updateMoviesListData(data?.data));
    }
  }, [data?.data]);
/* handle pagination state */

 const onChangePagination = (page) => {
    const updatedPagination= {...pagination}
    updatedPagination.page = page;
    dispatch(updatePagination(updatedPagination));
  };
  /* handle pagination state */

  const updateSearchParam = (text) => {
    const updatedPagination= {...pagination}
    updatedPagination.page = 1;
    updatedPagination.query = text;
    dispatch(updatePagination(updatedPagination));
  };

  return (
    <>
      <NavBar />
      <main>
        <div className='welcome-container'>
          <div className='welcome-text-box'>
            <h2 className='wlecome-text'>{t('welcome')}</h2>
            <h3 className='welecome-subtext'>{t('subTitle')}</h3>
          </div>
          <Search
            onSearch={ updateSearchParam }
            placeholder= {t('movie.searchPlaceholder')}
          />
        </div>
        <div className='container dashboard-body-container col-md-6 col-12'>
          <div className='sort-container'>
            <CategorySelect
              catTypeSelected={ moviesType }
            />
          </div>
          <div className='movies-list-layout'>
            <MoviesList 
              moviesList={moviesList} 
              isLoading={isLoading}
            />
            {
              !isLoading && pagination?.total_pages > 0 && moviesList?.length>0 &&
              <CustomPagination
                  current={ pagination?.page }
                  take={ pagination?.take }
                  onChange={ onChangePagination }
                  total={ pagination?.total_pages }
              />
            }
          </div>
        </div>
      </main>
    </>
  )
};
