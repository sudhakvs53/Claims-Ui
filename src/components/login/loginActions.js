// import fetch from 'cross-fetch'
import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_PENDING
} from './loginConstants';
import authToken from './authToken';

export function loginFailed(message) {
    return {
        type: LOGIN_FAILED,
        message: message
    };
}

export function loginSuccess(user) {
    console.log('login success');
    return {
        type: LOGIN_SUCCESS,
        user: user
    };
}

export function authenticate(userCreds, history) {
    return dispatch => {
        fetch('http://localhost:3002/authenticate', {
            headers: {
                'Content-Type': 'application/JSON'
            },
            method: 'POST',
            body: JSON.stringify(userCreds)
        }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if (json.success) {
                        history.push('/dashboard');
                        authToken.set(json.token);
                        return dispatch(loginSuccess(json.data));
                    }
                    return dispatch(loginFailed(json.message));
                });
            }
        }).catch(errData => {
            return dispatch(loginFailed(errData));
        });
    };
}
