import { useQuery } from 'react-query';
import { MoviesService } from '../services';

const moviesService = new MoviesService();

const useGetMovies = (params) => useQuery(
  ['movies', params],
  () => {
    const { page, pageSize, query, moviesType, mediaType} = params;
    
    if ( query) {
      return moviesService.searchMovies({page, pageSize, query});
    } else  if (moviesType === 'popular') {
        return moviesService.fetchPopularMovies({page, pageSize, moviesType});
    } else if (page) {
      return moviesService.fetchMovies({page, pageSize, moviesType, mediaType });
    }

    return null;
  },
  { keepPreviousData: false, staleTime: 60000 }
);

const useGetMovieDetailsById = (id) => useQuery(
  ['movie', id],
  () => {
      return moviesService.fetchMovieDetailsById(id);
  },
  { retry: false, refetchOnWindowFocus: false }
);

const useGetTopRatedMovies = () => useQuery(
  ['movies-toprated'],
  () => {
      return moviesService.fetchTopRatedMovies();
  },
  { retry: false, refetchOnWindowFocus: false }
);


export { useGetMovies, useGetMovieDetailsById, useGetTopRatedMovies };
