import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Landing from './modules/Landing-View/containers/landing';
import PrefView from './modules/Pref-View/containers/PrefView'

module.exports = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={Landing}>
      <Route path="preferences" component={PrefView} />
    </Route>
  </Router>
);