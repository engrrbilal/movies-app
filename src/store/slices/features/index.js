import { combineReducers } from 'redux';
import { appFeatureReducer } from './app';
import { moviesFeatureReducer } from './movies';


const featuresReducer = combineReducers({
  app: appFeatureReducer,
  movies: moviesFeatureReducer,
  /**
   * More feature reducers will be added here
   */
});

export { featuresReducer };
