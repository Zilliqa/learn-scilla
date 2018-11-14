import { createStore, applyMiddleware, compose } from 'redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // make sure you add this for firestore
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import { firebaseConfig, reactReduxFirebaseConfig } from './config';
import rootReducer from './reducer';
import { logger } from 'redux-logger';

// Initialize Firebase with config
firebase.initializeApp(firebaseConfig);

// Initialize Firestore with timeshot settings
firebase.firestore().settings({ timestampsInSnapshots: true });

// Use redux logger only when env is development
const isDev = process.env.NODE_ENV === 'development';
const middlewares = isDev ? [logger] : [];

export const store = createStore(
  // reducer
  rootReducer,
  // enhancer
  compose(
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, reactReduxFirebaseConfig),
    applyMiddleware(...middlewares)
  )
);
