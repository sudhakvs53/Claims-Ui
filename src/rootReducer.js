import { combineReducers } from 'redux';
import { navigateToDetail } from './components/claims/navigateToDetail';
import { saveClaimReducer } from './reducers/claimReducer';
import { loginStatus } from './components/login/loginReducer';
import { reducer as reduxFormReducer } from 'redux-form';
import createProjectReducer from './reducers/createProjectReducer';
import fetchClaimsReducer from './reducers/fetchClaimsReducer';

export default combineReducers({
    loginStatus,
    form: reduxFormReducer,
    navToDetail: navigateToDetail,
    saveClaims: saveClaimReducer,
    createPrj: createProjectReducer,
    fetchClaims: fetchClaimsReducer
});