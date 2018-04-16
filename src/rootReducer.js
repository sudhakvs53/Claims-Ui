import { combineReducers } from 'redux';
import { navigateToDetail } from './components/CreateClaims/createClaimReducer';
import { saveClaimReducer } from './reducers/saveClaimReducer';
import { loginStatus } from './components/login/loginReducer';
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