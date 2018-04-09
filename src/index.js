import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from './configureStore';
import LoginPage from './pages/login/LoginPage';
import CreateClaimForm from './pages/CreateClaims/CreateClaimForm';
import CreateClaimDetails from './pages/CreateClaims/CreateClaimDetails';
import App from './pages/Dashboard/App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap-theme.min.css";
import "./css/main.css";

import NotFound from './pages/NotFound';
const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Switch>
        {/* <Route exact path="/" component={LoginPage} /> 
         <Route exact path="/claimsDB" component={HomePage} /> */}
         <Route exact path="/dashboard" component={App} /> 
       <Route exact path="/createClaim" component={CreateClaimForm} />
        <Route exact path="/claimDetails" component={CreateClaimDetails} />
       {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('app')
);
