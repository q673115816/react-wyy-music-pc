import React from 'react';
import './style.scss';

import { useDispatch, useSelector } from 'react-redux';
import DomNormal from './Normal';
import DomPlay from './Play';
import DomMessage from './Message';
import DomKeyboard from './Keyboard';
import DomDownload from './Download';
import DomLyric from './Lyric';
import DomTool from './Tool';
import DomAbout from './About';

export default () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(({ common }) => common);
  return (
    <div className="domSetting">
      <div className="domSetting_header">
        <div className="domSetting_title h1">设置</div>
        <div className="domSetting_nav">
          <span className="domSetting_nav_link">账号</span>
          <span className="domSetting_nav_link">常规</span>
          <span className="domSetting_nav_link">播放</span>
          <span className="domSetting_nav_link">消息与隐私</span>
          <span className="domSetting_nav_link">快捷键</span>
          <span className="domSetting_nav_link">下载设置</span>
          <span className="domSetting_nav_link">歌词</span>
          <span className="domSetting_nav_link">工具</span>
          <span className="domSetting_nav_link">关于网易云音乐</span>
        </div>
      </div>
      <div className="domSetting_main overflow-auto">
        {
          isLogin ? <div>logined</div>

            : (
              <div>
                <div className="gray" style={{ marginBottom: 10 }}>登录网易云音乐，手机电脑多端同步，320K高音质无限下载</div>
                <span className="ui_btn_small">立即登录</span>
              </div>
            )
        }

        <div className="domSetting_hr" />
        <DomNormal />
        <div className="domSetting_hr" />
        <DomPlay />
        <div className="domSetting_hr" />
        <DomMessage />
        <div className="domSetting_hr" />
        <DomKeyboard />
        <div className="domSetting_hr" />
        <DomDownload />
        <div className="domSetting_hr" />
        <DomLyric />
        <div className="domSetting_hr" />
        <DomTool />
        <div className="domSetting_hr" />
        <DomAbout />
      </div>

    </div>
  );
};
