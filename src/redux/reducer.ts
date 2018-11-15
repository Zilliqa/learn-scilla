import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import { firestoreReducer as firestore } from 'redux-firestore';

import courseInstructions from '../tutorial-assets/lesson-instruction';
import courseCodes from '../tutorial-assets/lesson-code';

const course = () => ({ courseCodes, courseInstructions });

export default combineReducers({
  firebase,
  firestore,
  course
});
