import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PrefView from './modules/Pref-View/containers/PrefView';
import HomeView from './modules/Home-View/containers/HomeView';
import FriendView from './modules/Friend-View/containers/FriendView';
import CoreLayout from 'layouts/Core';
import LandingLayout from 'layouts/Landing';
import SignIn from 'modules/SignIn-View/containers/SignIn';
import RestaurantView from 'modules/Restaurant-View/containers/RestaurantView';
import GroupView from 'modules/Group-View/containers/GroupView';
import authenticatedComponent from 'containers/Auth';
import checkBoarded from 'containers/Boarding';

export default () => {
  return (
    <Route component={CoreLayout}>
      <Route path="/" component={LandingLayout}>
        <IndexRoute component={SignIn} />
        <Route path="signin" component={SignIn} />
        <Route path="home" component={checkBoarded(authenticatedComponent(HomeView), { withValue: false, redirectTo: '/onboarding/preferences' })} />
        <Route path="group" component={authenticatedComponent(GroupView)} />
        <Route path="onboarding/preferences" component={authenticatedComponent(PrefView)} />
        <Route path="onboarding/addfriends" component={authenticatedComponent(FriendView)} />
        <Route path="restaurant" component={checkBoarded(authenticatedComponent(RestaurantView), { withValue: false, redirectTo: '/onboarding/preferences' })} />
      </Route>
    </Route>
  );
};
