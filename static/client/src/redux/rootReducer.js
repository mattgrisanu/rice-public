import { combineReducers } from 'redux';
import { reducers } from './../modules/landing-view/ducks/ducks'
import { checkPref } from './../modules/Pref-View/ducks/pref-view-ducks'

const rootReducer = combineReducers({
  data: reducers,
  checkPref: checkPref

});

export default rootReducer;