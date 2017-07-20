# How to get setup

## Bootstrapping the application
Use `create-react-app` to bootstrap the application
```bash
npm install -g create-react-app
create-react-app shop-client-react
cd shop-client-react
npm start
```

## Configure redux

```bash
npm install redux react-redux
cd src && mkdir actions components reducers
```

`Store.js`
```js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = (initialState) => {
  return createStore(rootReducer, initialState);
}

export default store;
```

`actions/products.js`
```js
const getProducts = () => {
  return {
    type: 'getProducts'
  }
}

const getProduct = (id) => {
  return {
    type: 'getProduct',
    payload: id
  }
}

export { getProducts, getProduct }
```


`reducers/products.js`
```js
// Hardcoded products will be replaced with http call to a service
// once async actions are introduced with ReduxThunk
const products = [{id: "1", name: "Product 1"}, {id: "2", name: "Product 2"}];
const defaultState = {
  products: [],
  product: null
}

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'getProducts':
      return Object.assign({}, state, {
        products: [...products],
      });
    case 'getProduct':
      const product = state.products.find(product => product.id === action.payload);
      return Object.assign({}, state, { product });
    default:
      return state;
  }
}

export default productsReducer;
```

`reducers/index.js`
```js
import { combineReducers } from 'redux';
import productsReducer from './products.js';

const rootReducer = combineReducers({
  productsState: productsReducer
});

export default rootReducer;
```

`index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import Store from './Store';

const store = new Store();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
```

Once the store, actions, and reducers are in place then a component should be
created to use the new functionality.  This component should be added the root
application component `App.js`.


## Configure redux-thunk for async actions

```bash
npm install redux-thunk
```

`Store.js`
```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk);

const store = (initialState) => {
  return createStore(rootReducer, initialState, middleware);
}

export default store;
```

Once the store has been updated with `redux-thunk` middleware, then the actions and reducers can be refactored to use async patterns where needed.
