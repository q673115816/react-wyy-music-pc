import React, { useState } from 'react';
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

const nav = [
  '账号',
  '常规',
  '播放',
  '消息与隐私',
  '快捷键',
  '下载设置',
  '歌词',
  '工具',
  '关于网易云音乐',
];

export default () => {
  const dispatch = useDispatch();
  const { isLogin } = useSelector(({ common }) => common);
  const [activeSetting, setActiveSetting] = useState('账号');
  const handleScrollToActive = (active) => {
    setActiveSetting(active);
  };
  const handleScrollActive = () => {
  };

  return (
    <div className="domSetting">
      <div className="domSetting_header">
        <div className="domSetting_title h1">设置</div>
        <div className="domSetting_nav">
          {nav.map((item) => (
            <a
              href={`#${item}`}
              onClick={() => handleScrollToActive(item)}
              className={['domSetting_nav_link', activeSetting === item ? 'on' : null].join(' ')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="domSetting_main overflow-auto" onScroll={handleScrollActive}>
        {
          isLogin ? <div>logined</div>

            : (
              <div>
                <div className="gray" style={{ marginBottom: 10 }}>登录网易云音乐，手机电脑多端同步，320K高音质无限下载</div>
                <span className="ui_btn_small">立即登录</span>
              </div>
            )
        }

        <div className="domSetting_hr" id="常规" />
        <DomNormal />
        <div className="domSetting_hr" id="播放" />
        <DomPlay />
        <div className="domSetting_hr" id="消息与隐私" />
        <DomMessage />
        <div className="domSetting_hr" id="快捷键" />
        <DomKeyboard />
        <div className="domSetting_hr" id="下载设置" />
        <DomDownload />
        <div className="domSetting_hr" id="歌词" />
        <DomLyric />
        <div className="domSetting_hr" id="工具" />
        <DomTool />
        <div className="domSetting_hr" id="关于网易云音乐" />
        <DomAbout />
      </div>

    </div>
  );
};
