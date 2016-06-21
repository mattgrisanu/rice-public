import { combineReducers } from 'redux';
// import { restaurant, preferences } from './../modules/landing-view/ducks/ducks'
import user from './UserReducer'
import restaurant from './RestaurantReducer'
import preferences from './PreferencesReducer'

const rootReducer = combineReducers({
  user: user,
  restaurant: restaurant,
  preferences: preferences,

});

export default rootReducer;