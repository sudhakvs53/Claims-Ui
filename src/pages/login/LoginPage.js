import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from './loginActions';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.showResults = this.showResults.bind(this);
  }

  showResults(values) {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    this.props.login('http://localhost:3002/login', {
      "user_id": "admin",
      "pwd": "manage"
    });
  }

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.showResults} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (url, userData) => dispatch(login(url, userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);