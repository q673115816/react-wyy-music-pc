import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  dialogLoginVisibilty, setContriesCodeList, setLoginInfo, setIsLogin,
} from '@/redux/actions';
import { apiCountriesCodeList, apiUserAccount } from '@/api';
import { setCookie } from '@/common/request';

export default ({ mousedown }) => {
  const { goBack, goForward } = useHistory();
  const dispatch = useDispatch();
  const { isLogin, profile } = useSelector(({ common, user }) => ({ ...common, ...user }));
  const handleShowLogin = () => {
    dispatch(dialogLoginVisibilty());
  };

  const handleGetCountriesCodeList = async () => {
    try {
      const { data } = await apiCountriesCodeList();
      dispatch(setContriesCodeList(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCookieInit = async () => {
    const cookie = window.localStorage.getItem('cookie');
    if (!cookie) return;
    try {
      const { profile } = await apiUserAccount();
      dispatch(setLoginInfo(profile));
      dispatch(setIsLogin());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetCountriesCodeList();
    handleCookieInit();
  }, []);

  return (
    <div role="" className="domheader" onMouseDown={() => ''}>
      <Link to="/" className="domheader_logo">
        首页
      </Link>
      <div>
        <button type="button" onClick={() => goBack()} className="domheader_page_prev">
          <i className="material-icons">arrow_back_ios</i>
        </button>
        <button type="button" onClick={() => goForward()} className="domheader_page_next">
          <i className="material-icons">arrow_forward_ios</i>
        </button>
      </div>
      <form style={{ position: 'relative' }}>
        <input type="text" placeholder="搜索" className="domheader_search" />
      </form>
      <Link to="/" className="domheader_voice">
        <i className="material-icons">mic</i>
      </Link>
      <div className="domheader_user">
        <button
          type="button"
          className="_handle domheader_user_login"
          onClick={handleShowLogin}
        >
          {isLogin
            ? (
              <>
                <span>
                  <img src={profile.avatarUrl} alt="" />
                </span>
                <span>未登录</span>
                <i className="material-icons">arrow_drop_down</i>
              </>
            )
            : (
              <>
                <i className="material-icons gary">account_circle</i>
                <span>未登录</span>
                <i className="material-icons">arrow_drop_down</i>
              </>
            )}

        </button>
        <button type="button" className="_handle">开通VIP</button>
      </div>
      <div className="domheader_function">
        <Link to="/settings" className="_handle domheader_ico" title="设置">
          <i className="material-icons">settings</i>
        </Link>
        <span className="_handle domheader_ico" title="换肤">
          <i className="material-icons">palette</i>
        </span>
        <span className="_handle domheader_ico" title="私信">
          <i className="material-icons">mail_outline</i>
        </span>
      </div>
      <span className="domheader_spilt" />
      <div className="domheader_control">
        <span className="_handle domheader_ico" title="mini模式">
          <i className="material-icons">close_fullscreen</i>
        </span>
        <span className="_handle domheader_ico" title="最小化">
          <i className="material-icons">remove</i>
        </span>
        <span className="_handle domheader_ico" title="最大化">
          <i className="material-icons">crop_square</i>
        </span>
        <span className="_handle domheader_ico" title="关闭">
          <i className="material-icons">close</i>
        </span>
      </div>
    </div>
  );
};
