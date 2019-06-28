import React from 'react';
import ReactDOM from 'react-dom';
import {  Router } from 'react-router-dom';
import './index.css';
import App from './app.component';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import portalApp from './reducers';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import history from './history';

WebFont.load({
  google: {
    families: ['Barlow:300,400,400i,500,600,700']
  }
});

const store = createStore(portalApp, applyMiddleware(thunk));
export {store};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
