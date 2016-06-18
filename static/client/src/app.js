import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Landing from './modules/landing-view/components/landing';

module.exports = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={Landing}>
    </Route>
  </Router>
);