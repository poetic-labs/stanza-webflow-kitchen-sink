/* eslint-disable */
import { combineReducers } from 'redux';
import emailForm from './email-form';
import email from './email';
import name from './name';

export default combineReducers({
emailForm,
email,
name
})
