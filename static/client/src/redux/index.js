import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
// import thunkMiddleware from 'redux-thunk';

export default createStore(
  rootReducer,
  {
    text: ''
  }
);