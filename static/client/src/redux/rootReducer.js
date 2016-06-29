import { combineReducers } from 'redux';
import user from './UserReducer';
import restaurant from './RestaurantReducer';
import preferences from './PreferencesReducer';
import location from './LocationReducer';
import recommendation from './RecReducer';
import group from './GroupReducer';
import * as authReducers from '../modules/SignIn-View/ducks';
import _ from 'lodash';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({

  ...authReducers,
  user,
  restaurant,
  preferences,
  location,
  recommendation,
  group,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
