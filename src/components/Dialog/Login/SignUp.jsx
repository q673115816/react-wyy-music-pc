import React, { useContext, useState } from 'react';
import { IconFaceId, IconDeviceMobile } from '@tabler/icons';
import {
  SymbolWX,
  SymbolQQ,
  SymbolWB,
  SymbolWY,
} from '@/components/Symbol';
import DomSelect from './components/Select';
import { LoginContext } from './index';

export default () => {
  const [warn, setWarn] = useState('');
  const {
    loginReducer: {
      registerphone,
      registerpassword,
      countrycode,
    }, loginDispatch,
  } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!registerphone) {
      setWarn('⚠️请输入手机号码');
    } else if (!registerpassword) {
      setWarn('⚠️请输入登录密码');
    }
  };

  const handlePhone = () => {

  };

  const handlePassword = () => {

  };

  return (
    <div className="form">
      <div className="angle absolute top-0 left-0">
        <button
          className="mt-2.5"
          type="button"
          onClick={() => loginDispatch({ type: 'SET_TYPE', payload: { type: 'signin' } })}
        >
          &lt; 返回登录
        </button>
      </div>
      <div style={{ height: 200, color: 'var(--themeColor)' }} className="flex-center">
        <IconFaceId size={100} stroke={1} />
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
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
                  placeholder="请输入手机号"
                  className="input"
                  readOnly
                  onFocus={({ target }) => target.removeAttribute('readonly')}
                  value={registerphone}
                  onChange={({ target }) => handlePhone(target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <input
                  type="password"
                  name="password"
                  placeholder="设置登录密码"
                  className="input"
                  readOnly
                  onFocus={({ target }) => target.removeAttribute('readonly')}
                  value={registerpassword}
                  minLength="8"
                  maxLength="20"
                  onChange={({ target }) => handlePassword(target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="info">
          {
            warn
              ? <div className="warn ui_red">{warn}</div>
              : <span className="text-gray-400">密码8-20位，至少包含字母/数字/字符2中组合</span>
          }
        </div>
        <div className="actions">
          <button type="submit" className="submit">注册</button>
          <div className="hint flex items-center justify-between mt-8 mb-4">其他注册方式</div>
          <div className="threes flex justify-between">
            <button type="button" className="three">
              <SymbolWX hover />
              <div className="name mt-2">微信</div>
            </button>
            <button type="button" className="three">
              <SymbolQQ hover />
              <div className="name mt-2">QQ</div>
            </button>
            <button type="button" className="three">
              <SymbolWB hover />
              <div className="name mt-2">新浪微博</div>
            </button>
            <button type="button" className="three">
              <SymbolWY hover />
              <div className="name mt-2">网易邮箱</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
