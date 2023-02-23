import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavBar } from '../../components';
import { TopMoviesRatingChart, TopMoviesRatedCountChart } from '../../components/charts';
import { useGetTopRatedMovies } from '../../hooks/movies';

export const StatsPage = () => {
  const [t] = useTranslation('movies');
  const { isLoading, data} = useGetTopRatedMovies();
  const top10MoviesData = data?.data?.results?.slice(0, 10)

  return (
    <>
      {(
        <main>
            <NavBar />
            <div className='charts-container'>
              <div>
                <TopMoviesRatingChart 
                  data={top10MoviesData}
                  datasetLabel='Movies Rating'
                />
              </div>
              <div>
                <TopMoviesRatedCountChart
                 data={top10MoviesData}
                 datasetLabel='Movies Rated Counts'
                /> 
              </div>
            </div>
        </main>
      )}
    </>
  )
};
