import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer'
// import thunkMiddleware from 'redux-thunk';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
export default createStore(
  rootReducer,
  {},
  enhancers
);