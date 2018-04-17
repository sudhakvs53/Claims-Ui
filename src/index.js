import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { loginStatus } from './components/login/loginReducer';
import { LOGIN_SUCCESS } from './components/login/loginConstants';
import configureStore from './configureStore';

import LoginPage from './components/login/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import CreateClaimForm from './components/CreateClaims/CreateClaimForm';
import CreateClaimDetails from './components/CreateClaims/CreateClaimDetails';
import authToken from './components/login/authToken';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-theme.min.css";
import "./css/main.css";

import NotFound from './components/NotFound';
const store = configureStore();

/*{() => (store.getState().loginStatus.status == LOGIN_SUCCESS?(<Redirect to="/dashboard"/>) : (<LoginPage/>))}*/
render(
  <Provider store={store}>
    <Router>
      <Switch>
          { <Route exact path="/" render={() => (authToken.isSet()? (<Redirect to="/dashboard"/>) : (<LoginPage/>))}  /> }
          { <Route exact path="/login" component={LoginPage} /> }
          { <Route exact path="/dashboard" component={Dashboard} /> }
          { <Route exact path="/createClaim" component={CreateClaimForm} /> }
          { <Route exact path="/claimDetails" component={CreateClaimDetails} /> }
          {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('app')
);
