import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
  // console.log('checking simpleForm props obj ', props);
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="Username"
          />
        </div>
      </div>
      <div>
        <div>
          <label>Password</label>
          <div>
            <Field
              name="password"
              component="input"
              type="text"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple'
})(LoginForm);