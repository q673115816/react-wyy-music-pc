import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  apiLoginCellphone,
} from '@/api';
import { IconFaceId, IconQrcode, IconDeviceMobile } from '@tabler/icons';
import {
  SymbolWX,
  SymbolQQ,
  SymbolWB,
  SymbolWY,
} from '@/components/Symbol';
import { LoginContext } from './index';
import DomSelect from './components/Select';

export default () => {
  const {
    loginReducer: {
      argeeArgument,
      loginphone,
      loginpassword,
      loginwarn,
      countrycode,
    },
    loginDispatch,
  } = useContext(LoginContext);

  const handleLogin = async () => {
    try {
      const {
        data,
        code,
        msg,
        cookie,
        token,
        profile,
      } = await apiLoginCellphone({
        phone: loginphone,
        password: loginpassword,
        countrycode,
      });
      if (code === 200) {
        // setCookie(cookie);
        // handleToggle();
        // dispatch(setLoginInfo(profile));
        // dispatch(setIsLogin());
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    function warntext(loginwarn) {
      loginDispatch({
        type: 'SET_WARN',
        payload: {
          loginwarn,
        },
      });
    }
    if (!argeeArgument) {
      alert('请先勾选同意《服务条款》《服务条款》《服务条款》');
    } else if (!loginphone) {
      warntext('⚠️请输入手机号');
    } else if (!loginpassword) {
      warntext('⚠️请输入密码');
    } else if (!/\d{11}/.test(loginphone)) {
      warntext('⚠️请输入11位数字的手机号');
    } else {
      handleLogin();
    }
  };

  const handlePhone = (loginphone) => {
    loginDispatch({
      type: 'SET_SIGNIN_PHONE',
      payload: {
        loginphone,
      },
    });
  };

  const handlePassword = (loginpassword) => {
    loginDispatch({
      type: 'SET_SIGNIN_PASSWORD',
      payload: {
        loginpassword,
      },
    });
  };

  const handleArgument = (argeeArgument) => {
    loginDispatch({
      type: 'SET_SIGNIN_ARGEEARGUMENT',
      payload: {
        argeeArgument,
      },
    });
  };

  const handleToSignUp = () => {
    if (argeeArgument) {
      loginDispatch({
        type: 'SET_TYPE',
        payload: { type: 'signup' },
      });
    } else {
      alert('请先勾选同意《服务条款》《服务条款》《服务条款》');
    }
  };

  return (
    <div className="form">
      <div className="angle">
        <button
          type="button"
          onClick={() => loginDispatch({ type: 'SET_TYPE', payload: { type: 'scan' } })}
        >
          <IconQrcode size={36} />
        </button>
        <span className="tips">扫码登录更安全</span>
      </div>
      <div style={{ height: 200, color: 'var(--baseRed)' }} className="flex-center">
        <IconFaceId size={100} stroke={1} />
      </div>
      <form onSubmit={handleSubmit}>
        <table className="table">
          <colgroup>
            <col width="84" />
            <col width="auto" />
            <col width="84" />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <DomSelect />
              </td>
              <td colSpan="2">
                <input
                  type="text"
                  name="phone"
                  autoComplete="off"
                  placeholder="请输入手机号"
                  className="input"
                  value={loginphone}
                  onChange={({ target }) => handlePhone(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="请输入密码"
                  className="input"
                  value={loginpassword}
                  onChange={({ target }) => handlePassword(target.value)}
                />
              </td>
              <td>
                <div className="flex-center">
                  <button type="button" className="ui_gray">重设密码</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="info">
          <label className="auto">
            <input type="checkbox" name="auto" hidden />
            <i className="ico flex-center">✔</i>
            自动登录
          </label>
          <div className="warn ui_red">{loginwarn}</div>
        </div>
        <div className="actions">
          <button type="submit" className="submit">登&nbsp;录</button>
          <button
            type="button"
            className="signup"
            onClick={handleToSignUp}
          >
            注册
          </button>
          <div className="threes">
            <button type="button" className="three">
              <SymbolWX hover />
            </button>
            <button type="button" className="three">
              <SymbolQQ hover />
            </button>
            <button type="button" className="three">
              <SymbolWB hover />
            </button>
            <button type="button" className="three">
              <SymbolWY hover />
            </button>
          </div>
        </div>
        <label className="argument">
          <input
            hidden
            type="checkBox"
            name="agreement"
            checked={argeeArgument}
            onChange={({ target }) => handleArgument(target.value)}
          />
          <i className="ico flex-center">✔</i>
          <span className="ui_gray">
            同意
          </span>
          <a
            className="ui_link hover"
            target="_blank"
            rel="noopener noreferrer"
            href="https://st.music.163.com/official-terms/service"
          >
            《服务条款》
          </a>
          <a
            className="ui_link hover"
            target="_blank"
            rel="noopener noreferrer"
            href="https://st.music.163.com/official-terms/privacy"
          >
            《隐私条款》
          </a>
          <a
            className="ui_link hover"
            target="_blank"
            rel="noopener noreferrer"
            href="https://st.music.163.com/official-terms/children"
          >
            《儿童隐私条款》
          </a>
        </label>
      </form>
    </div>
  );
};
