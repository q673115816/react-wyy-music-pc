import React, { createContext, useMemo, useReducer } from "react";
import { IconX } from "@tabler/icons";
import { setLoginVisibilty } from "@/reducers/common/slice";
import { useImmerReducer } from "use-immer";
import "./style.scss";
import Scan from "./Scan";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Reset from "./Reset";
import Identify from "./Identify";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import { LoginInitialState, LoginReducer, LoginContext } from "./Content";

const Build = {
  scan: Scan,
  signin: SignIn,
  signup: SignUp,
  reset: Reset,
  identify: Identify,
};

export default () => {
  const dispatch = useAppDispatch();
  const { loginVisibility } = useAppSelector(({ common }) => common);
  const [loginReducer, loginDispatch] = useImmerReducer(
    LoginReducer,
    LoginInitialState
  );
  const { type } = loginReducer;
  const Inner = useMemo(() => Build[type], [type]);
  if (!loginVisibility) return null;
  return (
    <div
      id="dialogLogin"
      className="-translate-x-1/2 -translate-y-1/2 bg-white fixed left-1/2 rounded shadow top-1/2 transform ui_dialog"
    >
      <button
        type="button"
        className="ui_dialog_close close"
        onClick={() => dispatch(setLoginVisibilty())}
      >
        <IconX stroke={1.5} />
      </button>
      <LoginContext.Provider value={{ loginReducer, loginDispatch }}>
        <Inner />
      </LoginContext.Provider>
    </div>
  );
};
