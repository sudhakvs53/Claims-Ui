import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_PENDING
} from './loginConstants';

export function loginStatus(state = {loginStatus: LOGIN_PENDING}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { loginStatus: LOGIN_SUCCESS, user: action.user});
    case LOGIN_FAILED:
      return Object.assign({}, state, { loginStatus: LOGIN_FAILED});
    default:
      return state;
  }
}



