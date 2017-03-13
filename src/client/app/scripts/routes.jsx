/*
 * Define routes for the project.
 */
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import layout
import Layout from 'scripts/modules/layout/Layout.jsx';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
    </Route>
  </Router>
);

export default Routes;
