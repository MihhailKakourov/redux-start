import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

// Custom middleware to handle string actions
const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
};

// Safely check if Redux DevTools extension is available
const devToolsExtension =
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  combineReducers({ heroes, filters }),
  compose(
    applyMiddleware(stringMiddleware),
    devToolsExtension || ((f) => f)  // Fallback to identity function if DevTools is unavailable
  )
);

export default store;
