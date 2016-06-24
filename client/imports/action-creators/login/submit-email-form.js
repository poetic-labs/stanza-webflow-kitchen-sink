import actionTypeConstants from '../../action-type-constants/index';
import { Accounts } from 'meteor/accounts-base';
import store from '../../store';

export default function submitEmailForm(event) {
  event.preventDefault();

  const { name, email } = store.getState().login;

  Accounts.createUser({ email, password: name });

  return {
    type: actionTypeConstants.login.submitEmailForm,
    value: event.target.value
  };
}
