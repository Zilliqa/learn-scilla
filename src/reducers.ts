import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import { firestoreReducer as firestore } from 'redux-firestore';

import courseInstructions from './course/instruction';
import courseCodes from './course/code';

const course = () => ({ courseCodes, courseInstructions });

export default combineReducers({
  firebase,
  firestore,
  course
});
