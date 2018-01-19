import {
  // IS_LOGGED_IN,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGIN_PENDING
} from './loginConstants';

export function login_failed(login_error) {
  return {
    type: LOGIN_FAILED,
    login_error
  };
}

export function login_successful(login_successful) {
  return {
    type: LOGIN_SUCCESSFUL,
    login_successful
  };
}

export function login_pending(login_pending) {
  return {
    type: LOGIN_PENDING,
    login_pending
  };
}

// export function is_logged_in(is_logged_in) {
//   return {
//     type: IS_LOGGED_IN,
//     is_logged_in
//   };
// }

export function login(url, userData) {
  return dispatch => {
    fetch(url, {
      method: 'POST',
      body: userData
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(login_pending(true));
      dispatch(login_failed(null));
      dispatch(login_successful(null));

    }).then(resp => resp.json())
      .then(response => {

        dispatch(login_successful(true));
        dispatch(login_failed(false));
        dispatch(login_pending(false));

      })
      .catch(errData => {

        dispatch(login_failed(true));
        dispatch(login_successful(false));
        dispatch(login_pending(false));

      });
  };
}