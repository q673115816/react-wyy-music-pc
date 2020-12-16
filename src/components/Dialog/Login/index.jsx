import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './_login.scss';
import { apiLoginCellphone } from '@/api';
import { useDispatch, useSelector } from 'react-redux';
import { dialogLoginVisibilty, setIsLogin } from '@/redux/actions';
import { setCookie } from '@/common/request';

export default () => {
  const [isagree, setIsagree] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loginInfo, setLoginInfo] = useState('');
  const { countriesCodeList } = useSelector(({ common }) => common);
  const dispatch = useDispatch();
  const {
    dialog_login_visibility: visibility,
  } = useSelector(
    ({ common }) => common,
  );

  const handleToggle = () => {
    dispatch(dialogLoginVisibilty());
  };

  const handleLogin = async () => {
    try {
      const {
        data, code, msg, cookie, token,
        profile,
      } = await apiLoginCellphone({
        phone,
        password,
      });
      if (code === 502) {
        console.log(msg);
      } else if (code === 200) {
        setCookie(cookie);
        handleToggle();
        dispatch(setLoginInfo(profile));
        dispatch(setIsLogin());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = (e) => {
    e.preventDefault();
    if (!isagree) {
      setLoginInfo('请先勾选同意《服务条款》《服务条款》《服务条款》');
      return false;
    } if (!phone) {
      setLoginInfo('请输入手机号');
    } else if (!password) {
      setLoginInfo('请输入密码');
    } else if (!/\d{11}/.test(phone)) {
      setLoginInfo('请输入11位数字的手机号');
    } else {
      handleLogin();
    }
  };
  return (
    <div
      className="dialog_login"
      style={{ display: visibility ? '' : 'none' }}
    >
      <button type="button" className="close" onClick={handleToggle}>×</button>
      <div className="_inner">
        <div style={{ height: 200 }} />
        <form action="" onSubmit={login}>
          <table className="_table">
            <tbody>
              <tr>
                <td>
                  <select name="" id="" defaultValue="中国" className="write">
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
                <td>
                  <input
                    type="text"
                    name="phone"
                    placeholder="请输入手机号"
                    className="write"
                    autoComplete="new-psword"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    type="password"
                    name="password"
                    placeholder="请输入密码"
                    className="write"
                    value={password}
                    autoComplete="new-psword"
                    onChange={({ target }) => setPassword(target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div>{loginInfo}</div>
          <label>
            自动登录
            <input type="checkbox" name="auto" />
          </label>
          <div>
            <button type="submit" className="submit">登录</button>
          </div>
          <div>
            <Link to="register">注册</Link>
          </div>
          <div>
            <label>
              <input
                type="checkBox"
                name="agreement"
                value={isagree}
                onChange={({ target }) => setIsagree(target.value)}
              />
              <Link to="/">《服务条款》</Link>
              <Link to="/">《服务条款》</Link>
              <Link to="/">《服务条款》</Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};