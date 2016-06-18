import { combineReducers } from 'redux';
import { reducers } from './../modules/landing-view/ducks/ducks'

const rootReducer = combineReducers({
  text: reducers
});

export default rootReducer;