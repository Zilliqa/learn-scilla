import { createStore, applyMiddleware, compose } from 'redux';
import firebase from 'firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import 'firebase/database';
import 'firebase/firestore'; // make sure you add this for firestore

import { firebaseConfig, reactReduxFirebaseConfig } from './config';
import rootReducer from './reducer';

// Initialize Firebase with config
firebase.initializeApp(firebaseConfig);

// Initialize Firestore with timeshot settings
firebase.firestore().settings({ timestampsInSnapshots: true });

let middlewares: any[] = [];
// Use redux logger only when env is development
if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line
  const { logger } = require('redux-logger');
  middlewares = [logger];
}

export const store = createStore(
  rootReducer,
  compose(
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, reactReduxFirebaseConfig),
    applyMiddleware(...middlewares)
  )
);
