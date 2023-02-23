import { createSelector } from 'reselect';
 
const baseSelector = (state) => state?.entities?.movies;

export const getMoviesPagination = createSelector(baseSelector, state => state?.data?.pagination);

export const getMoviesList = createSelector(baseSelector, state => state?.data?.movies);

export const getMovieDetails = createSelector(baseSelector, state => state?.data?.movie);
