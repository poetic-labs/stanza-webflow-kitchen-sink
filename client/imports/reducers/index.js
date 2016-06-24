/* eslint-disable */
import { combineReducers } from 'redux';
import face from './face/index';
import form from './form/index';
import index from './index/index';
import loading from './loading/index';
import login from './login/index';

export default combineReducers({
face,
form,
index,
loading,
login
})
