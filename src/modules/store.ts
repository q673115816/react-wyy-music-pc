import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { base } from "./services/base";
// We'll use redux-logger just as an example of adding another middleware
import logger from "redux-logger";
import { combineReducers } from "redux";
// And use redux-batch as an example of adding enhancers
// import { reduxBatch } from "@manaflair/redux-batch";

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
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  timeout: 2000, // 缓解卡顿
  blackList: ["mask"],
};

const preloadedState = {};

if (window && window.__STATE__) {
  // Read the state sent with markup
  // const preloadedState = window.__STATE__;
  Object.assign(preloadedState, window.__STATE__);

  // delete the state from global window object
  delete window.__STATE__;
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [base.reducerPath]: base.reducer,
    ...rootReducer,
  })
);

const store = configureStore({
  // reducer: combineReducers({
  //   [base.reducerPath]: base.reducer,
  //   ...rootReducer,
  // }),
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(base.middleware),
  devTools: NODE_ENV !== "production",
  preloadedState,
  // enhancers: [reduxBatch],
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
