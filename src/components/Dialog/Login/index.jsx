import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { apiLoginCellphone, apiLoginQrKey, apiLoginQrCreate } from '@/api';
import { useDispatch, useSelector } from 'react-redux';
import { dialogLoginVisibilty, setIsLogin, setLoginInfo } from '@/redux/actions';
import { setCookie } from '@/common/request';

const DomQr = () => {
  const [qrimg, setQrimg] = useState('');
  const [key, setKey] = useState('');
  const handleInit = async () => {
    try {
      const { data: { unikey } } = await apiLoginQrKey();
      const { data: { qrimg } } = await apiLoginQrCreate({
        key: unikey,
        qrimg: null,
      });
      setQrimg(qrimg);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoop = async () => {
    try {
      const
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
    const id = setInterval(handleLoop, 5000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="qr">
      <div className="title">扫码登录</div>
      <div>
        <img src={qrimg} alt="" />
      </div>
      <div>
        使用
        <a href="https://music.163.com/#/download" className="ui_link">网易云音乐APP</a>
        扫码登录
      </div>
      <button type="button">选择其他登录模式&gt;</button>
    </div>
  );
};

const DomSignIn = () => (
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
      <div>{warn}</div>
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
);

const DomSignUp = () => (
  <div className="inner">{ }</div>
);

export default () => {
  const dispatch = useDispatch();
  const [isagree, setIsagree] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [warn, setWarn] = useState('');
  const { countriesCodeList } = useSelector(({ common }) => common);
  const [type, setType] = useState('qr');

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

  const login = (e) => {
    e.preventDefault();
    if (!isagree) {
      setWarn('请先勾选同意《服务条款》《服务条款》《服务条款》');
    } else if (!phone) {
      setWarn('请输入手机号');
    } else if (!password) {
      setWarn('请输入密码');
    } else if (!/\d{11}/.test(phone)) {
      setWarn('请输入11位数字的手机号');
    } else {
      handleLogin();
    }
  };
  return (
    <div
      className="dialog_login"
    >
      <button type="button" className="close" onClick={() => dispatch(dialogLoginVisibilty())}>×</button>
      {type === 'qr' && <DomQr />}
      {type === 'signin' && <DomSignIn />}
      {type === 'signup' && <DomSignUp />}

    </div>
  );
};
