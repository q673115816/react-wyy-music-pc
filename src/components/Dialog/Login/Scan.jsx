import React, {
  useEffect, useRef, useState, useContext,
} from 'react';
import { IconFaceId, IconScan } from '@tabler/icons';
import { apiLoginQrKey, apiLoginQrCreate, apiLoginQrCheck } from '@/api';
import { LoginContext } from './index';

export default () => {
  const [qrimg, setQrimg] = useState('');
  const [key, setKey] = useState('');
  const [status, setStatus] = useState(0);
  const checkTimer = useRef();
  const { loginDispatch } = useContext(LoginContext);
  const handleInit = async () => {
    try {
      const { data: { unikey } } = await apiLoginQrKey();
      const { data: { qrimg } } = await apiLoginQrCreate({
        key: unikey,
        qrimg: null,
      });
      setKey(unikey);
      setQrimg(qrimg);
      setStatus(0);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoop = async () => {
    try {
      const { code, cookie } = await apiLoginQrCheck({
        key,
      });
      if (code === 800) {
        clearInterval(checkTimer);
        setStatus(800);
      }
      if (code === 802) {
        setStatus(802);
      }
      if (code === 803) {
        // setCookie(cookie)
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  useEffect(() => {
    checkTimer.current = setInterval(handleLoop, 5000);
    return () => {
      clearInterval(checkTimer.current);
    };
  }, [key]);

  return (
    <div className="qr">
      <div className="title">扫码登录</div>
      {(status === 0 || status === 800) && (
        <div className="scanwait">
          <div className="qrbox">
            <div className="left">
              <div className="ico flex-center">
                <IconScan size={64} />
              </div>
            </div>
            <div className="right">
              <div className="qrimg">
                <img src={qrimg} alt="" />
                {
                  status === 800
                  && (
                    <div className="mask">
                      <div>二维码已失效</div>
                      <button type="button" className="btn" onClick={() => handleInit()}>点击刷新</button>
                    </div>
                  )
                }
              </div>
              <div className="tips">
                使用
                <a href="https://music.163.com/#/download" className="ui_link">网易云音乐APP</a>
                扫码登录
              </div>
            </div>
          </div>
          <button
            type="button"
            className="otherchoose"
            onClick={() => loginDispatch({ type: 'SET_TYPE', payload: { type: 'signin' } })}
          >
            选择其他登录模式&nbsp;&gt;
          </button>
        </div>
      )}
      {
        status === 802
        && (
          <div className="scansuccess">
            <div className="ico flex-center">
              <IconFaceId size={64} stroke="1" />
            </div>
            <span className="text-gray-400">
              扫描成功
            </span>
            <div className="tips">请在手机上确认登录</div>
          </div>
        )
      }
    </div>
  );
};
