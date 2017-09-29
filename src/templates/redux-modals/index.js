import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from "./containers/App";
import configureStore from "./store/configureStore";
import './redux-modals.scss';

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App itemId='redux-modals-1'/>
  </Provider>,
  document.getElementById('redux-modals-1')
);

render(
  <Provider store={store}>
    <App itemId='redux-modals-2'/>
  </Provider>,
  document.getElementById('redux-modals-2')
);