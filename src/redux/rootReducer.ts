import { combineReducers } from 'redux';

import { firebaseReducer as firebase } from 'react-redux-firebase';
import auth from './auth';
import course from './course';
import persist from './persist';

export default combineReducers({
  firebase,
  auth,
  course,
  persist
});
