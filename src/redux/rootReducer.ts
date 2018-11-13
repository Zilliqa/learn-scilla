import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import course from './course/reducer';

export default combineReducers({
  firebase,
  course
});
