# Shop Client React
> Example shop client built with react & redux


## Build setup
```bash
npm install
npm start
```

## Design system integration
In order to include the design system into the react application the dependency
needs to be added and the styles need to imported into the application.

```bash
npm install github:johngully/shop-design-system-patternpack
```

`index.js`
```js
import 'shop-patternpack/dist/pattern-library/assets/css/patterns.css';
```

#### A note on HTML image tags `<img src="..." />`
In order to load images from the design system they must first be imported so that the react render function can find them.  Referencing images using a literal path will not work.

```js
import iconRemove from 'shop-patternpack/dist/pattern-library/assets/images/icon-remove.svg';

class myComponent {
  render() {
    return (
      <!-- Referencing the src using the imported variable works -->
      <img src={iconRemove} />

      <!-- Referencing the src directly does not work -->
      <img src="shop-patternpack/dist/pattern-library/assets/images/icon-remove.svg" />
    );
  }
}
```


## Bootstrapping a new application
Use `create-react-app` to bootstrap the application
```bash
npm install -g create-react-app
create-react-app shop-client-react
cd shop-client-react
npm start
```

### Configure redux for flux state management

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


### Configure redux-thunk for async actions

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


### Configure react-router-redux for routing

```bash
npm install react-router-dom react-router-redux@next history
```

`Store.js`
```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const router = routerMiddleware(history);

const middleware = applyMiddleware(thunk, router);

const Store = (initialState) => {
  return createStore(rootReducer, initialState, middleware);
}

export { history, Store };
export default Store;
```

`index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { Store, history } from './Store';

import { ConnectedRouter } from 'react-router-redux'

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
```

`reducers/index.js`
```js
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import productsReducer from './products.js';

const rootReducer = combineReducers({
  router: routerReducer,
  productsState: productsReducer
});

export default rootReducer;
```

Once the `react-router-dom` and `react-router-redux` have been introduced, routes
can be added to `App.js` and components can use `<Link to="">` to navigate.
