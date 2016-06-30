/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';
import custom from '../../../custom/index';

const actionCreator = function changeName(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.login.changeName,
    value: event.target.value
  };
}

const customize = custom['action-creators/login/change-name'] || ((x) => x);

export default customize(actionCreator, { actionTypeConstants });
