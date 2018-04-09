import { createStore, applyMiddleware, compose } from 'redux';
import promise from "redux-promise-middleware";
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [promise(), thunk];
const enhancers = [];

// const initialState = {
//   loginStatus: {
//     login_pending: false,
//     login_failed: null,
//     login_succcessful: null
//   },
//   // is_logged_in: false,
//   loginDetails: {
//     user_id: '',
//     role: '',
//     email_id: ''
//   }
// };

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    /* preloadedState */
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}