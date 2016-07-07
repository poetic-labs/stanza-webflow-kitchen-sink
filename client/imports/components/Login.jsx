/* eslint-disable */
import React from 'react';
import MyForm from './MyForm';
import { connect as reduxConnect } from 'react-redux';
import action from '../action-creators/index';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="form-background">
          <div className="w-form form">
            <MyForm></MyForm>
            <div className="w-form-done">
              <div>
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className="w-form-fail">
              <div>
                Oops! Something went wrong while submitting the form
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
;

const LoginWithRedux = reduxConnect(
  (state) => ({
    'state.login.name': state.login.name,
    'state.login.email': state.login.email
  }),
  {
    'action.login.submitEmailForm': action.login.submitEmailForm,
    'action.login.changeName': action.login.changeName,
    'action.login.changeEmail': action.login.changeEmail
  }
)(Login);

export default LoginWithRedux;
