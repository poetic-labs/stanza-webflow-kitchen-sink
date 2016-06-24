/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changeName(event) {
  return {
    type: actionTypeConstants.form.changeName,
    value: event.target.value
  };
}
