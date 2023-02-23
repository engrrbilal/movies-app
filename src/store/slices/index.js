import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { entitiesReducer } from './entities';
import { featuresReducer } from './features';


/**
 * Redux Persist is a library that allows saving a Redux store in the local storage of an application,
 * So that application data don't lost when it relaunch.
 * As we have seprated our reducers into features and entities,
 * So for both features and entities we have to define seprate persistor configs too
 * to persist nested reducers
 */
const featurePersistConfig = {
  key: 'features',
  version: 1,
  storage,
  whitelist: [],
};

const entityPersistConfig = {
  key: 'entities',
  version: 1,
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  entities: persistReducer(entityPersistConfig, entitiesReducer),
  features: persistReducer(featurePersistConfig, featuresReducer),
});

export default rootReducer;
