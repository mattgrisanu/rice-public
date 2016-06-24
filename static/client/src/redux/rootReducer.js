import { combineReducers } from 'redux';
import user from './UserReducer';
import restaurant from './RestaurantReducer';
import preferences from './PreferencesReducer';
import location from './LocationReducer';
import recommendation from './RecReducer';
// import _ from 'lodash';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user,
  restaurant,
  preferences,
  location,
  recommendation,
  form: formReducer,
  routing: routerReducer,
});

export default rootReducer;
