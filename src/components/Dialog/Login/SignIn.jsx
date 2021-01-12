import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  apiLoginCellphone,
} from '@/api';
import { IconFaceId, IconQrcode, IconDeviceMobile } from '@tabler/icons';
import { LoginContext } from './index';

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
      phone,
      password,
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
export default () => {
  const { countriesCodeList } = useSelector(({ common }) => common);
  const {
    loginReducer: {
      argeeArgument,
      phone,
      password,
      warn,
    },
    loginDispatch,
  } = useContext(LoginContext);

  const login = (e) => {
    e.preventDefault();
    if (!argeeArgument) {
      loginDispatch({
        type: 'SET_WARN',
        payload: {
          warn: '请先勾选同意《服务条款》《服务条款》《服务条款》',
        },
      });
      // setWarn('请先勾选同意《服务条款》《服务条款》《服务条款》');
    } else if (!phone) {
      loginDispatch({
        type: 'SET_WARN',
        payload: {
          warn: '⚠️请输入手机号',
        },
      });
      // setWarn('请输入手机号');
    } else if (!password) {
      loginDispatch({
        type: 'SET_WARN',
        payload: {
          warn: '⚠️请输入密码',
        },
      });
      // setWarn('请输入密码');
    } else if (!/\d{11}/.test(phone)) {
      loginDispatch({
        type: 'SET_WARN',
        payload: {
          warn: '⚠️请输入11位数字的手机号',
        },
      });
      // setWarn('请输入11位数字的手机号');
    } else {
      handleLogin();
    }
  };

  const handlePhone = (phone) => {
    loginDispatch({
      type: 'SET_SIGNIN_PHONE',
      payload: {
        phone,
      },
    });
  };

  const handlePassword = (password) => {
    loginDispatch({
      type: 'SET_SIGNIN_PASSWORD',
      payload: {
        password,
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
      <div style={{ height: 200, color: 'var(--basered)' }} className="flex-center">
        <IconFaceId size={100} stroke={1} />
      </div>
      <form onSubmit={login}>
        <table className="table">
          <colgroup>
            <col width="84" />
            <col width="auto" />
            <col width="84" />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <label htmlFor="countriesCodeList" className="ico">
                  <IconDeviceMobile size={24} stroke={0.5} />
                </label>
                <select name="countriesCodeList" id="" defaultValue="中国" className="select">
                  {
                    countriesCodeList.map(({ countryList }) => countryList.map((country) => (
                      <option key={country.zh} value={country.zh}>
                        +
                        {country.code}
                      </option>
                    )))
                  }
                </select>
              </td>
              <td colSpan="2">
                <input
                  type="text"
                  name="phone"
                  placeholder="请输入手机号"
                  className="input"
                  value={phone}
                  onChange={({ target }) => handlePhone(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                  className="input"
                  value={password}
                  onChange={({ target }) => handlePassword(target.value)}
                />
              </td>
              <td>
                <button type="button" className="ui_gray">重设密码</button>
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
          <div className="warn ui_red">{warn}</div>
        </div>
        <div>
          <button type="submit" className="submit">登录</button>
        </div>
        <div>
          <button type="button">注册</button>
        </div>
        <div>
          <label>
            <input
              type="checkBox"
              name="agreement"
              value={argeeArgument}
              onChange={({ target }) => handleArgument(target.value)}
            />
            <Link to="/">《服务条款》</Link>
            <Link to="/">《服务条款》</Link>
            <Link to="/">《服务条款》</Link>
          </label>
        </div>
      </form>
    </div>
  );
};
