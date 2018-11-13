import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import firebase from 'firebase';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import 'firebase/database';
import 'firebase/firestore'; // make sure you add this for firestore

import { firebaseConfig, reactReduxFirebaseConfig } from './config';

import course from './course/reducer';

// Initialize Firebase with config
firebase.initializeApp(firebaseConfig);

// Initialize Firestore with timeshot settings
firebase.firestore().settings({ timestampsInSnapshots: true });

// Add firebase and firestore to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  course
});

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
    // Firebase instance as first argument
    reactReduxFirebase(firebase, reactReduxFirebaseConfig),
    applyMiddleware(...middlewares)
  )
);
