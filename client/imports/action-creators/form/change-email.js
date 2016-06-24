/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changeEmail(event) {
  return {
    type: actionTypeConstants.form.changeEmail,
    value: event.target.value
  };
}
