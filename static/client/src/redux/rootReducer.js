import { combineReducers } from 'redux';
import { user, restaurant, preferences } from './../modules/landing-view/ducks/ducks'
import { checkPref } from './../modules/Pref-View/ducks/pref-view-ducks'


const rootReducer = combineReducers({
  user: user,
  restaurant: restaurant,
  preferences: preferences,
  // userPreferences: checkPref

});

export default rootReducer;