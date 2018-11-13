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

// react-redux-firebase config
export const reactReduxFirebaseConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
