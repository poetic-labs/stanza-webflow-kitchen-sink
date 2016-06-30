/* eslint-disable */
import { combineReducers } from 'redux';
import email from './email';
import name from './name';

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_INITIALIZE':
      return action.value;
    default:
      return combineReducers({
email,
name
      })(state, action);
  }
}
