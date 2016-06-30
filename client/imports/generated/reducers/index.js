/* eslint-disable */
import { combineReducers } from 'redux';
import face from './face/index';
import index from './index/index';
import loading from './loading/index';
import login from './login/index';

export default (state = {}, action) => {
  switch (action.type) {
    case 'REDUCERS_INITIALIZE':
      return action.value;
    default:
      return combineReducers({
face,
index,
loading,
login
      })(state, action);
  }
}
