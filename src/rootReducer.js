import { combineReducers } from 'redux';
import { navigateToDetail } from './pages/CreateClaims/createClaimReducer';
import { saveClaimReducer } from './reducers/saveClaimReducer';
import { loginStatus } from './pages/login/loginReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  loginStatus,
  form: reduxFormReducer,
  navToDetail: navigateToDetail,
});