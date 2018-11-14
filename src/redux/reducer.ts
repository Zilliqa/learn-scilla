import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import { firestoreReducer as firestore } from 'redux-firestore';

import lessonInstructions from '../assets/lesson-instruction';
import lessonCodes from '../assets/lesson-code';

const course = () => ({ lessonCodes, lessonInstructions });

export default combineReducers({
  firebase,
  firestore,
  course
});
