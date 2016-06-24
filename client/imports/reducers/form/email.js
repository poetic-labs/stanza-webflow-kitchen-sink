/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function email(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.form.changeEmail:
      return action.value;
    default:
      return state;
  }
}
