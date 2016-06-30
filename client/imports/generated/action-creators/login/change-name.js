/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changeName(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.login.changeName,
    value: event.target.value
  };
}
