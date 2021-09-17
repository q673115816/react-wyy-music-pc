import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import rootReducer from './rootReducer'

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger'

// And use redux-batch as an example of adding enhancers
import { reduxBatch } from '@manaflair/redux-batch'

const preloadedState = {}

if (window && window.__STATE__) {
  // Read the state sent with markup
  // const preloadedState = window.__STATE__;
  Object.assign(preloadedState, window.__STATE__)

  // delete the state from global window object
  delete window.__STATE__;
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    // logger
  ],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  // enhancers: [reduxBatch],
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;

export default store