import { combineReducers } from 'redux';
import productsReducer from './products.js';

const rootReducer = combineReducers({
  productsState: productsReducer
});

export default rootReducer;
