/* eslint-disable */
import actionTypeConstants from '../../action-type-constants/index';

export default function emailForm(state = '', action) {
  switch (action.type) {
    case actionTypeConstants.form.submitEmailForm:
      return '';
    default:
      return state;
  }
}
