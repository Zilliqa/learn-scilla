import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

function configureStore() {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'] // only navigation will be persisted
  };

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  return {
    ...createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(...middlewares)),
    runSaga: sagaMiddleware.run
  };
}

export const store = configureStore();
store.runSaga(rootSaga);

export const persistor = persistStore(store);
