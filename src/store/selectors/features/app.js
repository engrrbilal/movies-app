import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const appFeatureSelector = state => state.features.app;

export const getAppLanguage = createSelector(appFeatureSelector, app => app.language);
