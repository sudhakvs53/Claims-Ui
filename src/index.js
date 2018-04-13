import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { loginStatus } from './pages/login/loginReducer';
import { LOGIN_SUCCESS } from './pages/login/loginConstants';
import configureStore from './configureStore';

import LoginPage from './pages/login/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
import CreateClaimForm from './pages/CreateClaims/CreateClaimForm';
import CreateClaimDetails from './pages/CreateClaims/CreateClaimDetails';
import authToken from './pages/login/authToken';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-theme.min.css";
import "./css/main.css";

import NotFound from './pages/NotFound';
const store = configureStore();

/*{() => (store.getState().loginStatus.status == LOGIN_SUCCESS?(<Redirect to="/dashboard"/>) : (<LoginPage/>))}*/
render(
  <Provider store={store}>
    <Router>
      <Switch>
          { <Route exact path="/" render={() => (authToken.isSet()? (<Redirect to="/dashboard"/>) : (<LoginPage/>))}  /> }
          { <Route exact path="/login" component={LoginPage} /> }
          { <Route exact path="/dashboard" component={Dashboard} /> }
          {/*<Route exact path="/claimsDB" component={HomePage} /> */}
          {/* <Route exact path="/claimDetails" component={CreateClaimDetails} />*/}
          {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('app')
);
