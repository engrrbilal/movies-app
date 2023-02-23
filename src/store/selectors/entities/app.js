import { createSelector } from 'reselect';

const appFeatureSelector = (state) => state.entities.app;

export const getAppData = createSelector(appFeatureSelector, app => app.data);
