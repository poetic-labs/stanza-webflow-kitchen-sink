/* eslint-disable */
import LoginOverrides from './overrides/Login';

export default {
  ...LoginOverrides,
  'components/App': (Self, dependencies) => Self,
  'action-creators/index': (Self, dependencies) => {
    console.log('========== action-creators/index ==========');
    return Self;
  },
  'action-type-constants/index': (Self, dependencies) => {
    console.log('========== action-type-constants/index ==========');
    return Self;
  },
  'reducers/index': (Self, dependencies) => {
    console.log('========== reducers/index ==========');
    return Self;
  },
};
