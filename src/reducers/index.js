import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import productsReducer from './products.js';

const rootReducer = combineReducers({
  router: routerReducer,
  productsState: productsReducer
});

export default rootReducer;
