import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';

import courseInstructions from './course/instructions';
import courseCodes from './course/codes';

const course = () => ({ courseCodes, courseInstructions });

export default combineReducers({
  firebase,
  course
});
