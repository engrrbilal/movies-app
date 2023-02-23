import { combineReducers } from 'redux';
import { appEntityReducer } from './app';
import { moviesEntityReducer } from './movies';

const entitiesReducer = combineReducers({
  app: appEntityReducer,
  movies: moviesEntityReducer,
  /**
   * More entity reducers will be added here
   */
});

export { entitiesReducer };
