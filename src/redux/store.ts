import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import firebase from 'firebase';
import { reactReduxFirebase } from 'react-redux-firebase';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

import { firebaseConfig, reactReduxFirebaseConfig } from './config';

// Initialize Firebase with config
firebase.initializeApp(firebaseConfig);

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  // Use redux logger only when env is development
  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  return {
    ...createStore(
      rootReducer,
      compose(
        // Firebase instance as first argument
        reactReduxFirebase(firebase, reactReduxFirebaseConfig),
        applyMiddleware(...middlewares)
      )
    ),
    runSaga: sagaMiddleware.run
  };
}

export const store = configureStore();
store.runSaga(rootSaga);
