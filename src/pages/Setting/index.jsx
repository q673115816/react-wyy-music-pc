import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { setLoginVisibilty } from '@/reducers/common/actions';
import useIsLogin from '@/custom/useIsLogin';

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

const DomAccountLogined = () => {
  const { profile, bindings } = useSelector(({ account }) => account);
  return (
    <>
      <div className="">
        {
        bindings.map((item) => BuildBinding(item))
      }
      </div>
      <div>
        <Link to={`/user/${profile.userId}/edit`} className="inline-block rounded-full px-3 py-1 border mr-2 hover:bg-gray-100">
          修改个人信息
        </Link>
        <Link to="/friend/invite" className="inline-block rounded-full px-3 py-1 border hover:bg-gray-100">
          寻找并邀请好友
        </Link>
      </div>
    </>
  );
};

const DomAccountUnLogined = ({ }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-gray-400 mb-3">
        登录网易云音乐，手机电脑多端同步，320K高音质无限下载
      </div>
      <button
        type="button"
        className="ui_btn_small inline-flex items-center justify-center h-6 px-3 rounded-full"
        onClick={() => dispatch(setLoginVisibilty())}
      >
        立即登录
      </button>
    </>
  );
};

export default () => {
  console.log('ssetting');

  const [isLogin] = useIsLogin();

  // const main = useRef();
  // const [activeSetting, setActiveSetting] = useState('账号');

  // const handleFollow = ({ target }) => {
  //   const hr = target.querySelectorAll('[data-title]');
  //   hr.forEach((item) => {
  //     if (item.offsetTop <= target.scrollTop) {
  //       setActiveSetting(item.dataset.title);
  //     }
  //   });
  // };

  // const handleScrollToActive = (active) => {
  //   const target = main.current.querySelector(`[data-title="${active}"]`);
  //   target.scrollIntoView();
  // };

  return (
    <div className="domSetting flex flex-col h-full">
      <div className="domSetting_header">
        <div className="domSetting_title h1">设置</div>
        <div className="domSetting_nav">
          {nav.map((item) => (
            <button
              key={item}
              type="button"
              // onClick={() => handleScrollToActive(item)}
              className={classnames('domSetting_nav_link')}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div
        className="domSetting_main overflow-auto max-h-full flex-auto divide-y"
        // onScroll={handleFollow}
        // ref={main}
      >
        <div data-title="账号">
          {
            isLogin
              ? <DomAccountLogined />
              : <DomAccountUnLogined />
          }
        </div>
        <div data-title="常规" className="mt-8 pt-8">
          <DomNormal />
        </div>
        <div data-title="播放" className="mt-8 pt-8">
          <DomPlay />
        </div>
        <div data-title="消息与隐私" className="mt-8 pt-8">
          <DomMessage />
        </div>
        <div data-title="快捷键" className="mt-8 pt-8">
          <DomKeyboard />
        </div>
        <div data-title="下载设置" className="mt-8 pt-8">
          <DomDownload />
        </div>
        <div data-title="歌词" className="mt-8 pt-8">
          <DomLyric />
        </div>
        <div data-title="工具" className="mt-8 pt-8">
          <DomTool />
        </div>
        <div data-title="关于网易云音乐" className="mt-8 pt-8">
          <DomAbout />
        </div>
      </div>

    </div>
  );
};
