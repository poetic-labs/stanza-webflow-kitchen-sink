/* eslint-disable */
import React from 'react';
import { connect as reduxConnect } from 'react-redux';
import action from '../action-creators/index';

class Form extends React.Component {
  render() {
    return (
      <div>
        <div className="form-background">
          <div className="w-form form">
            <form data-name="Email Form"
              id="email-form"
              name="email-form"
              onSubmit={this.props['action.form.submitEmailForm']}>
              <label htmlFor="name">
                NAME
              </label>
              <input data-name="Name"
                id="name"
                maxlength="256"
                name="name"
                placeholder="Enter your name"
                type="text"
                className="w-input"
                value={this.props['state.form.name']}
                onChange={this.props['action.form.changeName']} />
              <label htmlFor="email">
                EMAIL
              </label>
              <input data-name="Email"
                id="email"
                maxlength="256"
                name="email"
                placeholder="Enter your email address"
                required="required"
                type="email"
                className="w-input"
                value={this.props['state.form.email']}
                onChange={this.props['action.form.changeEmail']} />
              <input data-wait="Please wait..."
                type="submit"
                value="Submit"
                className="w-button button" />
            </form>
            <div className="w-form-done">
              <div>
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className="w-form-fail">
              <div>
                Oops! Something went wrong while submitting the form
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}
;
const FormWithRedux = reduxConnect(
  (state) => ({
    'state.form.name': state.form.name,
    'state.form.email': state.form.email
  }),
  {
    'action.form.submitEmailForm': action.form.submitEmailForm,
    'action.form.changeName': action.form.changeName,
    'action.form.changeEmail': action.form.changeEmail
  }
)(Form);

export default FormWithRedux;
