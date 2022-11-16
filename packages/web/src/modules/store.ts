import {
  configureStore,
  ThunkAction,
  Action,
  ConfigureStoreOptions,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers";
import { services, middlewares } from "./services";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
const preloadedState = {};

if (window && window.__STATE__) {
  // Read the state sent with markup
  const preloadedState = window.__STATE__;
  Object.assign(preloadedState, window.__STATE__);

  // delete the state from global window object
  delete window.__STATE__;
}

const persistConfig = {
  key: "root",
  version: 1.2,
  storage,
  debug: import.meta.env.DEV,
  stateReconciler: autoMergeLevel2,
  whitelist: [
    "common",
    "account",
    "settings",
    "inset",
    "audio",
    "search",
    "volume",
  ],
};

const baseReducer = {
  ...services,
  ...reducers,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(baseReducer)
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
  devTools: import.meta.env.DEV,
  preloadedState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
