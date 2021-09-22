import React, { memo, useEffect, createContext } from "react";
import { useImmerReducer } from "use-immer";
import { Switch, Route } from "react-router-dom";
import adapter from "webrtc-adapter";

import Home from "./Home";
import Live from "./Live";
import Room from "./Room";
import { useAppDispatch } from "@/reducers/hooks";
import {
  LookInitialState,
  LookReducer,
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
} from "./Content";

export const LookContent = createContext<any>(null);

export default memo(() => {
  const dispatch = useAppDispatch();
  const [lookReducer, lookDispatch] = useImmerReducer(
    LookReducer,
    LookInitialState
  );
  useEffect(() => {
    lookDispatch({ type: SOCKET_CONNECT });
    return () => {
      lookDispatch({ type: SOCKET_DISCONNECT });
    };
  }, []);
  return (
    <LookContent.Provider value={{ lookReducer, lookDispatch }}>
      <Switch>
        <Route path={`/look`} exact component={Home} />
        <Route path={`/look/my`} component={Live} />
        <Route path={`/look/:id(\\d*)`} component={Room} />
      </Switch>
    </LookContent.Provider>
  );
});
