import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

export const makeStore = initialState => {
  const devtoolsExt = global.devToolsExtension && global.devToolsExtension();

  const middlewares = [
    thunkMiddleware,
    routerMiddleware(browserHistory)
  ];
  if (!devtoolsExt) {
    const createLogger = require('redux-logger');
    const logger = createLogger({
      level: 'info',
      collapsed: true
    });
    middlewares.push(logger);
  }

  const mw = compose(
    applyMiddleware(...middlewares),
    devtoolsExt || (f => f)
  );
  const store = createStore(rootReducer, initialState, mw);

  return store;
};

export default makeStore;
