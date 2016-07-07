/* eslint-disable */
import React from 'react';

class MyForm extends React.Component {
  render() {
    return (
      <form data-name="Email Form" id="email-form" name="email-form">
        <label htmlFor="name">
          NAME
        </label>
        <input data-name="Name"
          id="name"
          maxlength="256"
          name="name"
          placeholder="Enter your name"
          type="text"
          className="w-input" />
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
          className="w-input" />
        <input data-wait="Please wait..."
          type="submit"
          value="Submit"
          className="w-button button" />
      </form>
      );
  }
}
;

export default MyForm;
