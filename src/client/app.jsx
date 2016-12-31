import { render } from 'react-dom';
import React from 'react';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store';
import './stylesheets/main.scss';

import routes from './router';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      { routes }
    </Router>
  </Provider>
);

render(<App />, document.getElementById('app'));
