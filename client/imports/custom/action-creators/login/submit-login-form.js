import store from '../../../generated/store';
import { Accounts } from 'meteor/accounts-base';
import actionTypeConstants from '../../../generated/action-type-constants/index';

export default function submitLoginForm(event) {
  event.preventDefault();

  const { name, email } = store.getState().login;

  Accounts.createUser({ email, password: name });

  return {
    type: actionTypeConstants.login.submitEmailForm,
    value: event.target.value,
  };
}
