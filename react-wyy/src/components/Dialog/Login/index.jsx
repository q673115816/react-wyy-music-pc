import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiLoginCellphone } from '@/api';
import { useDispatch, useSelector } from 'react-redux';
import { dialogLoginVisibilty } from '@/redux/actions';

export default () => {
  const [isagree, setIsagree] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loginInfo, setLoginInfo] = useState('');
  const { apiCountriesCodeList } = useSelector(({ common }) => common);
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
      const { data, code, msg } = await apiLoginCellphone({
        phone,
        password,
      });
      if (code === 502) {
        console.log(msg);
      } else if (code === 200) {

      }
    } catch (error) {

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
      <button unset="true" type="button" className="close" onClick={handleToggle}>×</button>
      <div className="_inner">
        <div style={{ height: 200 }} />
        <form action="" onSubmit={login}>
          <table className="_table">
            <tbody>
              <tr>
                <td>
                  <select name="" id="" defaultValue="中国" className="write">
                    {
                      apiCountriesCodeList.map(({ countryList }) => countryList.map((country) => (
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
          <button type="submit">登录</button>
          <Link to="register">注册</Link>
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
        </form>
      </div>
    </div>
  );
};
