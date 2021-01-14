import React, { useContext } from 'react';
import { IconFaceId, IconDeviceMobile } from '@tabler/icons';
import {
  Symbolwx,
  Symbolqq,
  Symbolwb,
  Symbolwy,
} from '@/components/Symbol';
import DomSelect from './components/Select';
import { LoginContext } from './index';

export default () => {
  const {
    loginReducer: {
      registerphone,
      registerpassword,
      registerwarn,
      countrycode,
    }, loginDispatch,
  } = useContext(LoginContext);
  const handleSubmit = () => {

  };

  const handlePhone = () => {

  };

  const handlePassword = () => {

  };
  return (
    <div className="form">
      <div className="angle">
        <button
          style={{ margin: 10 }}
          type="button"
          onClick={() => loginDispatch({ type: 'SET_TYPE', payload: { type: 'signin' } })}
        >
          &lt; 返回登录
        </button>
      </div>
      <div style={{ height: 200, color: 'var(--basered)' }} className="flex-center">
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
                  autoComplete="new-password"
                  placeholder="设置登录密码"
                  className="input"
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
            registerwarn
              ? <div className="warn ui_red">{registerwarn}</div>
              : <span className="ui_gray">密码8-20位，至少包含字母/数字/字符2中组合</span>
          }
        </div>
        <div className="actions">
          <button type="submit" className="submit">注册</button>
          <div className="hint">其他注册方式</div>
          <div className="threes">
            <button type="button" className="three flex-center wx">
              <span className="ico flex-center">
                <Symbolwx size={28} />
              </span>
              <span className="name">微信</span>
            </button>
            <button type="button" className="three flex-center qq">
              <span className="ico flex-center">
                <Symbolqq size={32} />
              </span>
              <span className="name">QQ</span>
            </button>
            <button type="button" className="three flex-center wb">
              <span className="ico flex-center">
                <Symbolwb size={32} />
              </span>
              <span className="name">新浪微博</span>
            </button>
            <button type="button" className="three flex-center wy">
              <span className="ico flex-center">
                <Symbolwy size={24} />
              </span>
              <span className="name">网易邮箱</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
