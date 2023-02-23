import { createSelector } from 'reselect';
 
const baseSelector = (state) => state?.features?.movies;

export const getMoviesSearchQuery = createSelector(baseSelector, state => state?.data?.query);

export const getMoviesType = createSelector(baseSelector, state => state?.data?.catType);
