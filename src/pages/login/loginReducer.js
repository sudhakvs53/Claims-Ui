import {
  // IS_LOGGED_IN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN_PENDING
} from './loginConstants';

export function login_failed(state = { login_failed: null }, action) {
  switch (action.type) {
    case LOGIN_FAILED:
      return Object.assign({}, state, { login_failed: action.login_failed });
    default:
      return state;
  }
}

export function login_success(state = { login_success: null }, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { login_success: action.login_success });
    default:
      return state;
  }
}

// export function is_logged_in(state = [], action) {
//   switch (action.type) {
//     case IS_LOGGED_IN:
//     return Object.assign({}, state, { login_failed: action.login_failed });
//     default:
//       return state;
//   }
// }

export function login_pending(state = { login_pending: false }, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, state, { login_pending: action.login_pending });
    default:
      return state;
  }
}



