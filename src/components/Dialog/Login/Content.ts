import { createContext } from "react";
import { Reducer } from "use-immer";

export const LoginContext = createContext<any>(null);

export const SET_TYPE = "SET_TYPE";
export const SET_SIGNIN_WARN = "SET_SIGNIN_WARN";
export const SET_SIGNIN_PHONE = "SET_SIGNIN_PHONE";
export const SET_SIGNIN_PASSWORD = "SET_SIGNIN_PASSWORD";
export const SET_SIGNIN_ARGEEARGUMENT = "SET_SIGNIN_ARGEEARGUMENT";
export const SET_SIGNIN_COUNTRYCODE = "SET_SIGNIN_COUNTRYCODE";

export const LoginReducer: Reducer = (draft, action) => {
  switch (action.type) {
    case SET_TYPE:
      draft.type = action.payload.type;
      return;
    case SET_SIGNIN_WARN:
      return;
    case SET_SIGNIN_PHONE:
      draft.loginphone = action.payload.loginphone;
      return;
    case SET_SIGNIN_PASSWORD:
      draft.loginpassword = action.payload.loginpassword;
      return;
    case SET_SIGNIN_ARGEEARGUMENT:
      draft.argeeArgument = action.payload.argeeArgument;
      return;
    case SET_SIGNIN_COUNTRYCODE:
      draft.countrycode = action.payload.countrycode;
      return;
    default:
      return;
  }
};

export type LoginType = "scan" | "signin" | "signup" | "reset" | "identify";

export interface LoginState {
  argeeArgument: boolean;
  loginphone: string;
  loginpassword: string;
  registerphone: string;
  registerpassword: string;
  type: LoginType;
  countrycode: string;
}

export const LoginInitialState: LoginState = {
  argeeArgument: true,
  loginphone: "",
  loginpassword: "",
  registerphone: "",
  registerpassword: "",
  type: "scan",
  countrycode: "86",
};
