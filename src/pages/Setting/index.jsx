import React, { useState, useRef, useEffect } from 'react';
import './style.scss';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Target from './components/Hoc';
import DomNormal from './components/Normal';
import DomPlay from './components/Play';
import DomMessage from './components/Message';
import DomKeyboard from './components/Keyboard';
import DomDownload from './components/Download';
import DomLyric from './components/Lyric';
import DomTool from './components/Tool';
import DomAbout from './components/About';

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

const BuildBinding = (item) => {

};

export default () => {
  const { isLogin } = useSelector(({ common }) => common);
  const { profile, bindings } = useSelector(({ account }) => account);
  const main = useRef();
  const [activeSetting, setActiveSetting] = useState('账号');

  // const [scrollWatch] = useState(
  //   new IntersectionObserver((entries) => {
  //     let active = null;
  //     entries.reverse().forEach((entry) => {
  //       if (entry.intersectionRatio > 0) {
  //         if (!active) {
  //           active = entry;
  //         } else if (entry.boundingClientRect.top < active.boundingClientRect.top) {
  //           active = entry;
  //         }
  //       }
  //     });
  //     console.log(active);
  //     setActiveSetting(active.target.dataset.title);
  //   }, {
  //     root: main.current,
  //     threshold: [0, 1.0],
  //   }),
  // );
  const handleFollow = ({ target }) => {
    const hr = target.querySelectorAll('[data-title]');
    hr.forEach((item) => {
      if (item.offsetTop <= target.scrollTop) {
        setActiveSetting(item.dataset.title);
      }
    });
  };

  const handleScrollToActive = (active) => {
    const target = main.current.querySelector(`[data-title="${active}"]`);
    // main.current.scrollTo(0, target.offsetTop + 30);
    target.scrollIntoView();
  };

  return (
    <div className="domSetting">
      <div className="domSetting_header">
        <div className="domSetting_title h1">设置</div>
        <div className="domSetting_nav">
          {nav.map((item) => (
            <button
              type="button"
              onClick={() => handleScrollToActive(item)}
              className={classnames('domSetting_nav_link', { on: activeSetting === item })}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="domSetting_main overflow-auto" onScroll={handleFollow} ref={main}>
        <div data-title="账号">
          {
            isLogin
              ? (
                <>
                  <div className="">
                    {
                      bindings.map((item) => BuildBinding(item))
                    }
                  </div>
                  <div>
                    <Link to={`/user/${profile.userId}/edit`}>修改个人信息</Link>
                    <Link to="/friend/invite">寻找并邀请好友</Link>
                  </div>
                </>
              )

              : (
                <>
                  <div className="ui_gray" style={{ marginBottom: 10 }}>登录网易云音乐，手机电脑多端同步，320K高音质无限下载</div>
                  <span className="ui_btn_small">立即登录</span>
                </>
              )
          }
        </div>
        <Target {... { 'data-title': '常规' }}>
          <DomNormal />
        </Target>
        <Target {... { 'data-title': '播放' }}>
          <DomPlay />
        </Target>
        <Target {... { 'data-title': '消息与隐私' }}>
          <DomMessage />
        </Target>
        <Target {... { 'data-title': '快捷键' }}>
          <DomKeyboard />
        </Target>
        <Target {... { 'data-title': '下载设置' }}>
          <DomDownload />
        </Target>
        <Target {... { 'data-title': '歌词' }}>
          <DomLyric />
        </Target>
        <Target {... { 'data-title': '工具' }}>
          <DomTool />
        </Target>
        <Target {... { 'data-title': '关于网易云音乐' }}>
          <DomAbout />
        </Target>
      </div>

    </div>
  );
};
