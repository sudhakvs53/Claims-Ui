import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  // is_logged_in: false,
  loginDetails: {
    userId: '',
    role: '',
    email: ''
  }
};

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    /* preloadedState */
    composeEnhancers(applyMiddleware(thunk))
  );
}