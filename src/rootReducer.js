import { combineReducers } from 'redux';
import { navigateToDetail } from './pages/CreateClaims/createClaimReducer';
import { saveClaimReducer } from './reducers/saveClaimReducer';
// import { itemsHaveError, itemsIsLoading, items } from './reducer';
import {
  // check_login,
  // is_logged_in,
  login_failed,
  login_successful,
  login_pending
} from './pages/login/loginReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  // check_login,
  // is_logged_in,
  login_failed,
  login_successful,
  login_pending,
  form: reduxFormReducer,
  navToDetail: navigateToDetail,
  saveClaims: saveClaimReducer
});