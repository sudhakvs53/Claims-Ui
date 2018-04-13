import { combineReducers } from 'redux';
import { navigateToDetail } from './pages/CreateClaims/createClaimReducer';
import { saveClaimReducer } from './reducers/saveClaimReducer';
import { loginStatus } from './pages/login/loginReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import  createProjectReducer  from './reducers/createProjectReducer';
import fetchClaimsReducer from './reducers/fetchClaimsReducer';

export default combineReducers({
  loginStatus,
  form: reduxFormReducer,
  navToDetail: navigateToDetail,
  saveClaims: saveClaimReducer,
  createPrj: createProjectReducer,
  fetchClaims: fetchClaimsReducer
});