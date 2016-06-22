import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Landing from './modules/Landing-View/containers/landing';
import PrefView from './modules/Pref-View/containers/PrefView'
import HomeView from './modules/Home-View/containers/HomeView'
import FriendView from './modules/Friend-View/containers/FriendView'
import CoreLayout from 'layouts/Core';
import LandingLayout from 'layouts/Landing';
import SignIn from 'modules/SignIn-View/containers/SignInView';

// module.exports = () => (
//   <Router history={ browserHistory }>
//     <Route path="/" component={Landing}>
//       <Route path="onboarding/preferences" component={PrefView} />
//       <Route path="home" component={HomeView} />
//       <Route path="onboarding/addfriends" component={FriendView} />
//     </Route>
//   </Router>
// );
// <IndexRoute component={SignIn} />
export default () => {
  return (
    <Route component={CoreLayout}>
      <Route path="/" component={LandingLayout}>
        <IndexRoute component={LandingLayout} />
        <Route path="onboarding/preferences" component={PrefView} />
        <Route path="home" component={HomeView} />
        <Route path="onboarding/addfriends" component={FriendView} />
      </Route>
    </Route>
  )
}
