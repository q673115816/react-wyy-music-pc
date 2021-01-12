import React, {
  useEffect, useRef, useState, createContext, useReducer,
} from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { dialogLoginVisibilty, setIsLogin, setLoginInfo } from '@/redux/actions';
import { setCookie } from '@/common/request';
import './style.scss';
import DomScan from './Scan';
import DomSignIn from './SignIn';

const DomSignUp = () => (
  <div className="inner">{ }</div>
);

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
      case 'SET_WARN':
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
      default:
        return state;
    }
  }, {
    argeeArgument: false,
    phone: '',
    password: '',
    warn: '',
    type: 'signin',
  });

  return (
    <div
      className="dialog_login"
    >
      <button
        type="button"
        className="close"
        onClick={() => dispatch(dialogLoginVisibilty())}
      >
        ×
      </button>
      <LoginContext.Provider value={{ loginReducer, loginDispatch }}>
        {Build[loginReducer.type]()}
      </LoginContext.Provider>
    </div>
  );
};
