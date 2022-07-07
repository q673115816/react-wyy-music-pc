import {
  configureStore,
  ThunkAction,
  Action,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { base } from "./services/base";

const preloadedState = {};

if (window && window.__STATE__) {
  // Read the state sent with markup
  // const preloadedState = window.__STATE__;
  Object.assign(preloadedState, window.__STATE__);

  // delete the state from global window object
  delete window.__STATE__;
}

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
      [base.reducerPath]: base.reducer,
      ...rootReducer,
    },
    // reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    //   }).concat(base.middleware),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(base.middleware),
    devTools: import.meta.env.DEV,
    ...options,
    // preloadedState,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
