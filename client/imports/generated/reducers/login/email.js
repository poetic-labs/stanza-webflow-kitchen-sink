/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';
import custom from '../../../custom/index';

const reducer = (state = '', action) => {
  const type = actionTypeConstants.login
    ? actionTypeConstants.login.changeEmail
    : '';

  switch (action.type) {
    // case actionTypeConstants.login.changeEmail:
    case type:
      return action.value;
    default:
      return state;
  }
}

const customize = custom['reducers/login/email'] || ((x) => x);

export default customize(reducer, { actionTypeConstants });
