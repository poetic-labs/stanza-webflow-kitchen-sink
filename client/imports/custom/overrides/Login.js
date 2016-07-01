import React from 'react';
import submitLoginForm from '../action-creators/login/submit-login-form';

const LoginOverrides = {
  'action-creators/login/submit-email-form': (Self, dependencies) => {
    console.log('========== action-creators/login/submit-email-form ==========');
    console.log('dependencies: ', dependencies);
    return submitLoginForm;
  },
  'components/Login': (Self, dependencies) => {
    console.log('========== components/Login ==========');
    console.log('dependencies: ', dependencies);

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
