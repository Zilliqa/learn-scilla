import { combineReducers } from 'redux';
import user from './user/reducer';
import persist from './persist/reducer';
import course from './course/reducer';

export default combineReducers({
  user,
  persist,
  course
});
