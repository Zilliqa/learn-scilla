import { createStore, applyMiddleware, compose } from 'redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // make sure you add this for firestore
import { reactReduxFirebase } from 'react-redux-firebase';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './rootReducer';
import { logger } from 'redux-logger';

/*
  The apiKey essentially identifies your Firebase project. It is not a security risk for someone to know it.
  https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
*/
export const firebaseConfig = {
  apiKey: 'AIzaSyBjcNRjbN9ZsWHxY8u3uSXeMMoXkoikPug',
  authDomain: 'learn-scilla.firebaseapp.com',
  databaseURL: 'https://learn-scilla.firebaseio.com',
  projectId: 'learn-scilla',
  storageBucket: 'learn-scilla.appspot.com',
  messagingSenderId: '825204243213'
};

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: ['persist']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Initialize Firebase with config
firebase.initializeApp(firebaseConfig);

// Initialize Firestore with timeshot settings
firebase.firestore().settings({ timestampsInSnapshots: true });

// Use redux logger only when env is development
const isDev = process.env.NODE_ENV === 'development';
const middlewares = isDev ? [logger] : [];

// react-redux-firebase config
const reactReduxFirebaseConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

export const store = createStore(
  // reducer
  persistedReducer,
  // enhancer
  compose(
    reactReduxFirebase(firebase, reactReduxFirebaseConfig),
    applyMiddleware(...middlewares)
  )
);

export const persistor = persistStore(store);
