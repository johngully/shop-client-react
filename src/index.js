import 'shop-patternpack/dist/pattern-library/assets/css/patterns.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { Store, history } from './Store';

import { ConnectedRouter } from 'react-router-redux';

const store = new Store();

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
