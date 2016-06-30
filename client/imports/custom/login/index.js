import React from 'react';
import store from '../../generated/store';
import { Accounts } from 'meteor/accounts-base';
import actionTypeConstants from '../../generated/action-type-constants/index';

const LoginOverrides = {
  'action-creators/login/index': (Self, dependencies) => {
    console.log('========== action-creators/login/index ==========');
    return Self;
  },
  'action-creators/login/change-email': (Self, dependencies) => {
    console.log('========== action-creators/login/change-email ==========');
    return Self;
  },
  'action-creators/login/change-name': (Self, dependencies) => {
    console.log('========== action-creators/login/change-name ==========');
    return Self;
  },
  'action-creators/login/submit-email-form': (Self, dependencies) => {
    console.log('========== action-creators/login/submit-email-form ==========');

    return function submitEmailForm(event) {
      event.preventDefault();

      const { name, email } = store.getState().login;

      Accounts.createUser({ email, password: name });

      return {
        type: actionTypeConstants.login.submitEmailForm,
        value: event.target.value,
      };
    };
  },
  'action-type-constants/login/index': (Self, dependencies) => {
    console.log('========== action-type-constants/login/index ==========');
    return Self;
  },
  'action-type-constants/login/change-email': (Self, dependencies) => {
    console.log('========== action-type-constants/login/change-email ==========');
    return Self;
  },
  'action-type-constants/login/change-name': (Self, dependencies) => {
    console.log('========== action-type-constants/login/change-name ==========');
    return Self;
  },
  'action-type-constants/login/submit-email-form': (Self, dependencies) => {
    console.log('========== action-type-constants/login/submit-email-form ==========');
    return Self;
  },
  'reducers/login/index': (Self, dependencies) => {
    console.log('========== reducers/login/index ==========');
    return Self;
  },
  'reducers/login/email': (Self, dependencies) => {
    console.log('========== reducers/login/email ==========');
    return Self;
  },
  'reducers/login/name': (Self, dependencies) => {
    console.log('========== reducers/login/name ==========');
    return Self;
  },
  'components/Login': (Self, dependencies) => {
    console.log('========== components/Login ==========');

    class CustomLogin extends React.Component {
      componentDidMount() {
        console.log('CustomLogin did mount!');
      }
      render() {
        return (
          <Self ref="Login" />
        );
      }
    }

    return CustomLogin;
  },
};

export default LoginOverrides;
