import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'; // no changes here 😀
import rootReducer from './rootReducer';

const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk),
  // other store enhancers if any
);
export default createStore(
  rootReducer,
  enhancer,
);
