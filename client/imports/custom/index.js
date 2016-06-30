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
  'action-type-constants/index': (Self, dependencies) => {
    console.log('========== action-type-constants/index ==========');
    return Self;
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
  'action-creators/index': (Self, dependencies) => {
    console.log('========== action-creators/index ==========');
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
    return Self;
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
