import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLoginVisibilty,
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
  apiLoginStatus,
  apiUserDetail,
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

export default ({ handleDrap }) => {
  const dispatch = useDispatch();
  const refHeader = useRef();
  const account = useSelector(({ account }) => account);

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
        const { profile: accountDetail, bindings } = await apiUserDetail({
          uid: profile.userId,
        });
        const { playlist } = await apiUserPlaylist({ uid: profile.userId });
        dispatch(setLoginInfo({ profile: { ...profile, ...accountDetail }, playlist, bindings }));
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
      className="domHeader relative flex items-center"
    >
      <button
        type="button"
        className="absolute inset-0 z-0 w-full focus:outline-none cursor-auto"
        onMouseDown={(e) => handleDrap(e)}
      >
        {}
      </button>
      <Link to="/" className="domHeader_logo text-white text-base z-10">
        网易云音乐
      </Link>
      <DomVisitStack />
      <DomSearch />
      <Link to="/ai" className="bg-black bg-opacity-5 w-8 h-8 rounded-full text-white flex-center z-10 ml-2">
        <IconMicrophone size={18} />
      </Link>
      <DomAccount />
      <DomFunction />
      <span className="domHeader_spilt mx-3 w-px h-4" />
      <DomControl />
    </div>
  );
};
