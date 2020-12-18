import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  dialogLoginVisibilty,
  setContriesCodeList,
  setLoginInfo,
  setIsLogin,
  setMsgPrivate,
  setPopup,
} from '@/redux/actions';
import {
  apiCountriesCodeList, apiUserAccount, apiMsgPrivate, apiUserPlaylist,
} from '@/api';
import { setCookie } from '@/common/request';

export default ({ mousedown }) => {
  const { goBack, goForward } = useHistory();

  const dispatch = useDispatch();
  const {
    isLogin, profile, popupStatus, newMsgCount,
  } = useSelector(({ common, account }) => ({ ...common, ...account }));
  const handleShowLogin = () => {
    dispatch(dialogLoginVisibilty());
  };

  const handleGetCountriesCodeList = async () => {
    try {
      const { data } = await apiCountriesCodeList();
      dispatch(setContriesCodeList({ countriesCodeList: data }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCookieInit = async () => {
    const cookie = window.localStorage.getItem('cookie');
    if (!cookie) return;
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

  const handleGetPrivateLetter = async () => {
    if (!isLogin) return;
    try {
      const { msgs, newMsgCount } = await apiMsgPrivate();
      dispatch(setMsgPrivate({ msgs, newMsgCount }));
    } catch (error) {
      console.log(error);
    }
  };

  const handlesetPopup = () => {
    if (popupStatus === 'privateLetter') {
      dispatch(setPopup({ popupStatus: '' }));
    } else {
      dispatch(setPopup({ popupStatus: 'privateLetter' }));
    }
  };

  useEffect(() => {
    handleGetCountriesCodeList();
    handleCookieInit();
    handleGetPrivateLetter();
  }, []);

  return (
    <div role="" className="domheader" onMouseDown={() => ''}>
      <Link to="/" className="domheader_logo">
        首页
      </Link>
      <div>
        <button type="button" onClick={() => goBack()} className="domheader_page_prev">
          <svg  className="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
        <button type="button" onClick={() => goForward()} className="domheader_page_next">
          <svg  className="icon icon-tabler icon-tabler-chevron-right" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
      <form style={{ position: 'relative' }}>
        <input type="text" placeholder="搜索" className="domheader_search" />
      </form>
      <Link to="/" className="domheader_voice">
        <svg  className="icon icon-tabler icon-tabler-microphone" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="9" y="2" width="6" height="11" rx="3" />
          <path d="M5 10a7 7 0 0 0 14 0" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </Link>
      <div className="domheader_user">
        {isLogin && profile
          ? (
            <div className="domheader_user_profile">
              <Link to={`/user/${profile.userId}`} className="avator">
                <img className="ui_containimg" src={profile.avatarUrl} alt="" />
              </Link>
              <button type="button" className=" ">
                <span>{profile.nickname}</span>
                <i className="ti ti-caret-down-fill" />
              </button>
            </div>
          )
          : (
            <button
              type="button"
              className="domheader_user_login"
              onClick={handleShowLogin}
            >
              <span className="person flex-center">
                <svg  className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </span>
              <span>未登录</span>
              <svg  className="icon icon-tabler icon-tabler-caret-down" width="12" height="12" viewBox="0 0 24 24" strokeWidth="2" fill="#fff" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
              </svg>
            </button>
          )}

        <button type="button" className="">开通VIP</button>
      </div>
      <div className="domheader_function">
        <Link to="/settings" className=" domheader_ico" title="设置">
          <svg  className="icon icon-tabler icon-tabler-settings" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </Link>
        <button type="button" className=" domheader_ico" title="换肤">
          <svg  className="icon icon-tabler icon-tabler-tool" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
          </svg>
        </button>
        <button
          type="button"
          className=" domheader_ico"
          onClick={handlesetPopup}
          title="私信"
        >
          <svg  className="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
          <span className="rt_ico">{newMsgCount}</span>
        </button>
      </div>
      <span className="domheader_spilt" />
      <div className="domheader_control">
        <button type="button" className=" domheader_ico" title="mini模式">
          <svg  className="icon icon-tabler icon-tabler-arrows-minimize" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 9 9 9 9 5" />
            <line x1="3" y1="3" x2="9" y2="9" />
            <polyline points="5 15 9 15 9 19" />
            <line x1="3" y1="21" x2="9" y2="15" />
            <polyline points="19 9 15 9 15 5" />
            <line x1="15" y1="9" x2="21" y2="3" />
            <polyline points="19 15 15 15 15 19" />
            <line x1="15" y1="15" x2="21" y2="21" />
          </svg>
        </button>
        <button type="button" className=" domheader_ico" title="最小化">
          <svg  className="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button type="button" className=" domheader_ico" title="最大化">
          <svg  className="icon icon-tabler icon-tabler-square" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
        </button>
        <button type="button" className=" domheader_ico" title="关闭">
          <svg  className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};
