import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { authenticate, loginSuccess } from './loginActions';
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
    constructor() {
        super();
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    }

    onLoginSubmit(event) {
        event.preventDefault();
        let userCreds = { username: event.target.username.value, password: event.target.password.value };
        this.props.dispatch(authenticate(userCreds, this.context.router.history));
    }

    render() {
        return (
            <form onSubmit={this.onLoginSubmit}>
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
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" >
                        Submit
          </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'simple'
})(LoginForm);