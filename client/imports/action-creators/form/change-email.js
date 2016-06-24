/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function changeEmail(event) {
  event.preventDefault();

  return {
    type: actionTypeConstants.form.changeEmail,
    value: event.target.value
  };
}
