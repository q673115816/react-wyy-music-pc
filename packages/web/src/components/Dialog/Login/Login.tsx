import React, { createElement, FC, memo } from "react";
import { IconX } from "@tabler/icons";
import { useImmerReducer } from "use-immer";
import "./style.scss";
import Scan from "./Scan";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Reset from "./Reset";
import Identify from "./Identify";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import {
  LoginInitialState,
  LoginReducer,
  LoginContext,
  LoginType,
} from "./Content";
import { maskSelector, setLoginVisibilty } from "@/modules/reducers/mask/slice";

const Build: { [key in LoginType]: FC<any> } = {
  Scan,
  SignIn,
  SignUp,
  Reset,
  Identify,
};

const Login = () => {
  const dispatch = useAppDispatch();
  const { loginVisibility } = useAppSelector(maskSelector);
  const [loginReducer, loginDispatch] = useImmerReducer(
    LoginReducer,
    LoginInitialState
  );
  const { type } = loginReducer;
  if (!loginVisibility) return null;
  return (
    <div
      id="dialogLogin"
      className="-translate-x-1/2 -translate-y-1/2 bg-white fixed left-1/2 rounded shadow top-1/2 transform"
    >
      <button
        type="button"
        className="absolute top-2.5 right-2.5 text-2xl z-10 text-gray-500"
        onClick={() => dispatch(setLoginVisibilty())}
      >
        <IconX stroke={1.5} />
      </button>
      <LoginContext.Provider value={{ loginReducer, loginDispatch }}>
        {createElement(Build[type])}
      </LoginContext.Provider>
    </div>
  );
};

export default memo(Login);
