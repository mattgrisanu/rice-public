import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Landing from './modules/Landing-View/containers/landing';
import PrefView from './modules/Pref-View/containers/PrefView'
import HomeView from './modules/Home-View/containers/HomeView'
import FriendView from './modules/Friend-View/containers/FriendView'

module.exports = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={Landing}>
      <Route path="onboarding/preferences" component={PrefView} />
      <Route path="home" component={HomeView} />
      <Route path="onboarding/addfriends" component={FriendView} />
    </Route>
  </Router>
);