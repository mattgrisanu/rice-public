import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import App from './app.js';


// import '../styles/app.scss';
import Modal from 'react-modal';
import { browserHistory } from 'react-router';
import makeRoutes from './app';
import Root from 'containers/Root';
import makeStore from './redux/index';


// ReactDOM.render(
//   <Provider store={ store }>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


const initialState = window.__INITIAL_STATE__ || {};
const store = makeStore(initialState);
const routes = makeRoutes();

const mountNode = document.getElementById('root');

Modal.setAppElement(mountNode);
ReactDOM.render(
  <Root history={browserHistory} routes={routes} store={store} />,
  mountNode
);
