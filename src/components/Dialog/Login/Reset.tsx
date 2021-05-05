import React, { useState, useContext } from 'react';
import { IconFaceId } from '@tabler/icons';
import { apiRegisterCellphone } from '@/api';
import { LoginContext } from './index';
import DomSelect from './components/Select';

export default () => {
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [warn, setWarn] = useState('');
  const {
    loginReducer: {
      countrycode,
    },
    loginDispatch,
  } = useContext(LoginContext);

  const handleFocus = () => {

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      setWarn('⚠️请输入手机号码');
    } else if (!password) {
      setWarn('⚠️请输入登录密码');
    } else {
      loginDispatch({ type: 'SET_TYPE', payload: { type: 'identify' } });
    }
  };

  return (
    <div className="form">
      <div className="angle">
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
                  value={phone}
                  onFocus={handleFocus}
                  onChange={({ target }) => setPhone(target.value)}
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
                  value={password}
                  minLength="8"
                  maxLength="20"
                  onFocus={handleFocus}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="info">
          {
            warn
              ? <div className="warn text-red-500 ml-auto">{warn}</div>
              : <span className="text-gray-400">密码8-20位，至少包含字母/数字/字符2中组合</span>
          }
        </div>
        <div className="actions">
          <button type="submit" className="submit">下一步</button>
        </div>
      </form>
    </div>
  );
};
