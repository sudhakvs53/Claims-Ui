import React from 'react';
import { reduxForm } from 'redux-form';
import { authenticate, loginSuccess } from './loginActions';
import PropTypes from 'prop-types'
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
    Panel,
    Grid,
    Row,
    HelpBlock
} from 'react-bootstrap';

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

    componentWillReceiveProps(nextProps) {
        this.setState({
            validationState: this.state.loginMsg
        });
    }
    render() {
        return (
            <Grid>
                <Row>
                    <form onSubmit={this.onLoginSubmit}>
                        <Panel id="login-panel">
                            <Panel.Heading>
                                Login
                            </Panel.Heading>
                            <Panel.Body>
                                <FormGroup>
                                    <FormControl
                                        name="username"
                                        type="text"
                                        placeholder="Username"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Button bsStyle="primary" type="submit">
                                        Submit
                                </Button>
                                </FormGroup>
                                <FormControl.Feedback />
                            </Panel.Body>
                        </Panel>
                    </form >
                </Row>
            </Grid>
        )
    }
}

export default reduxForm({
    form: 'simple'
})(LoginForm);