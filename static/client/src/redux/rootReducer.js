import { combineReducers } from 'redux';
import * as authReducers from '../modules/SignIn-View/ducks';
import user from './UserReducer'
import restaurant from './RestaurantReducer'
import preferences from './PreferencesReducer'
import _ from 'lodash';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  ...authReducers,
  user: user,
  restaurant: restaurant,
  preferences: preferences,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
