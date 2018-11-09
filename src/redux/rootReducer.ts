import { combineReducers } from 'redux';
import user from './user/reducer';
import persist from './persist/reducer';

export default combineReducers({
  user,
  persist
});
