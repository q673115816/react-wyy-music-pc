import React, {
  useEffect, useRef, useState, createContext, useReducer,
} from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { IconX } from '@tabler/icons';
import { setLoginVisibilty, setIsLogin, setLoginInfo } from '@/redux/actions';
import { setCookie } from '@/common/request';
import './style.scss';
import DomScan from './Scan';
import DomSignIn from './SignIn';
import DomSignUp from './SignUp';

export const LoginContext = createContext(null);

const Build = {
  scan: () => <DomScan />,
  signin: () => <DomSignIn />,
  signup: () => <DomSignUp />,
};

export default () => {
  const dispatch = useDispatch();
  const [loginReducer, loginDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_TYPE':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_WARN':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_PHONE':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_PASSWORD':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_ARGEEARGUMENT':
        return {
          ...state,
          ...action.payload,
        };
      case 'SET_SIGNIN_COUNTRYCODE':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  }, {
    argeeArgument: false,
    loginphone: '',
    loginpassword: '',
    loginwarn: '',
    registerphone: '',
    registerpassword: '',
    registerwarn: '',
    type: 'scan',
    countrycode: '86',
  });

  return (
    <div
      id="dialogLogin"
      className="ui_dialog"
    >
      <button
        type="button"
        className="ui_dialog_close close"
        onClick={() => dispatch(setLoginVisibilty())}
      >
        <IconX stroke={1.5} />
      </button>
      <LoginContext.Provider value={{ loginReducer, loginDispatch }}>
        {Build[loginReducer.type]()}
      </LoginContext.Provider>
    </div>
  );
};
