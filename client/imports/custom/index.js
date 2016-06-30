import React from 'react';
import store from '../generated/store';

export default {
  'components/App': (self, dependencies) => self,
  'components/Login': (Self, dependencies) => {
    console.log('========== components/Login ==========');

    class CustomLogin extends React.Component {
      render() {
        console.log('store.getState().login: ', store.getState().login);

        return (
          <Self ref="Login" />
        );
      }
    }

    return CustomLogin;
  },
  'reducers/index': (Self, dependencies) => {
    console.log('========== reducers/index ==========');
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
};
