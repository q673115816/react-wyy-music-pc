import React, { memo, useEffect, createContext } from "react";
import { useImmerReducer } from "use-immer";
import { Routes, Route, Outlet } from "react-router-dom";
import adapter from "webrtc-adapter";
import { useAppDispatch } from "@/reducers/hooks";
import {
  LookInitialState,
  LookReducer,
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
} from "./Content";
import getIP from "./getIP";

export const LookContent = createContext<any>(null);

export default memo(function Base() {
  const dispatch = useAppDispatch();
  const [lookReducer, lookDispatch] = useImmerReducer(
    LookReducer,
    LookInitialState
  );
  useEffect(() => {
    getIP();
  }, []);
  // useEffect(() => {
  //   lookDispatch({ type: SOCKET_CONNECT });
  //   return () => {
  //     lookDispatch({ type: SOCKET_DISCONNECT });
  //   };
  // }, []);
  return (
    <LookContent.Provider value={{ lookReducer, lookDispatch }}>
      <Outlet />
    </LookContent.Provider>
  );
});
