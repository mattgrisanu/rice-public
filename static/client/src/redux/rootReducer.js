import { combineReducers } from 'redux';
import { user, restaurant, preferences } from './../modules/landing-view/ducks/ducks'


const rootReducer = combineReducers({
  user: user,
  restaurant: restaurant,
  preferences: preferences,

});

export default rootReducer;