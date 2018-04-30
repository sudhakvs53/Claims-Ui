import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <LoginForm/>
      </div>
    );
  }
}

export default LoginPage;