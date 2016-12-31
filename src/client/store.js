import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/combine';

/* eslint-disable no-underscore-dangle */
export default function configureStore(preloadedState) {
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), preloadedState, applyMiddleware(thunk));
}
  /* eslint-enable */
