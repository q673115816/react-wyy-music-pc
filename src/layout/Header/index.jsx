import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLoginVisibility,
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
import { apiUserDetail } from '../../api';

export default ({ handleDrap }) => {
  const dispatch = useDispatch();
  const refHeader = useRef();
  const account = useSelector(({ account }) => account);
  // const { isLogin } = useSelector(({ common }) => common);
  // useEffect(() => {
  //   if (account) {
  //     dispatch(setIsLogin());
  //   } else {
  //     dispatch(setIsLogin());
  //   }
  // }, [account]);
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
      ref={refHeader}
      className="domHeader"
      onMouseDown={(e) => handleDrap(e, refHeader.current)}
    >
      <Link to="/" className="domHeader_logo">
        网易云音乐
      </Link>
      <DomVisitStack />
      <DomSearch />
      <Link to="/ai" className="domHeader_voice flex-center">
        <IconMicrophone size={20} stroke={1} />
      </Link>
      <DomAccount />
      <DomFunction />
      <span className="domHeader_spilt" />
      <DomControl />
    </div>
  );
};
