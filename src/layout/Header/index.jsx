import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  dialogLoginVisibilty,
  setContriesCodeList,
  setLoginInfo,
  setIsLogin,
  setMsgPrivate,
} from '@/redux/actions';
import {
  apiCountriesCodeList,
  apiUserAccount,
  apiMsgPrivate,
  apiUserPlaylist,
} from '@/api';
// import { setCookie } from '@/common/request';
import {
  IconMicrophone,
} from '@tabler/icons';

import DomVisitStack from './components/VisitStack';
import DomSearch from './components/Search';
import DomAccount from './components/Account';
import DomControl from './components/Control';
import DomFunction from './components/Function';

export default ({ mousedown }) => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(({ common }) => common);
  const { profile } = useSelector(({ account }) => account);

  const handleGetCountriesCodeList = async () => {
    try {
      const { data } = await apiCountriesCodeList();
      dispatch(setContriesCodeList({ countriesCodeList: data }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCookieInit = async () => {
    // const cookie = window.localStorage.getItem('cookie');
    // if (!cookie) return;
    try {
      const { profile } = await apiUserAccount();
      if (profile) {
        const { playlist } = await apiUserPlaylist({ uid: profile.userId });
        dispatch(setLoginInfo({ profile, playlist }));
        dispatch(setIsLogin());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrivateLetterInit = async () => {
    // if (!isLogin) return;
    try {
      const { msgs, newMsgCount } = await apiMsgPrivate();
      dispatch(setMsgPrivate({ msgs, newMsgCount }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetCountriesCodeList();
    handleCookieInit();
    handlePrivateLetterInit();
  }, []);

  return (
    <div
      className="domHeader"
      onMouseDown={() => ''}
    >
      <Link to="/" className="domHeader_logo">
        首页
      </Link>
      <DomVisitStack />
      <DomSearch />
      <Link to="/ai" className="domHeader_voice flex-center">
        <IconMicrophone size={20} stroke={1} />
      </Link>
      <DomAccount {...{ isLogin, profile }} />
      <DomFunction />
      <span className="domHeader_spilt" />
      <DomControl />
    </div>
  );
};
