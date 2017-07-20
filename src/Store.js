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
