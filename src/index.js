import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from './configureStore';
import LoginPage from './pages/login/LoginPage';
import NotFound from './pages/NotFound';
const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        {/* <Route exact path="/claimsDB" component={HomePage} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('app')
);
