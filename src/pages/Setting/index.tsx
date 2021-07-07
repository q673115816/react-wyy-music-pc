import React, {
  useState, useRef, useEffect, memo,
} from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { setLoginVisibilty } from '@/reducers/common/actions';
// import useIsLogin from '@/hooks/useIsLogin';

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
        className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full"
        onClick={() => dispatch(setLoginVisibilty())}
      >
        立即登录
      </button>
    </>
  );
};

export default memo(() => {
  console.log('ssetting');

  // const [isLogin] = useIsLogin();
  const { isLogin } = useSelector(({ common }) => common);
  const [active, setActive] = useState();
  const DomScroll = useRef();

  return (
    <div className="domSetting flex flex-col h-full">
      <div className="domSetting_header">
        <div className="domSetting_title h1">设置</div>
        <div className="domSetting_nav">
          {nav.map((item, index) => (
            <a
              href={`#${item}`}
              key={item}
              className={classNames('domSetting_nav_link', active === item && 'ui_underline font-bold')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div
        className="domSetting_main overflow-auto max-h-full flex-auto"
        // onScroll={handleFollow}
        ref={DomScroll}
      >
        <div id="账号" className="pb-8 mb-8 border-b">
          {
            isLogin
              ? <DomAccountLogined />
              : <DomAccountUnLogined />
          }
        </div>
        <div id="常规" className="pb-8 mb-8 border-b">
          <DomNormal />
        </div>
        <div id="播放" className="pb-8 mb-8 border-b">
          <DomPlay />
        </div>
        <div id="消息与隐私" className="pb-8 mb-8 border-b">
          <DomMessage />
        </div>
        <div id="快捷键" className="pb-8 mb-8 border-b">
          <DomKeyboard />
        </div>
        <div id="下载设置" className="pb-8 mb-8 border-b">
          <DomDownload />
        </div>
        <div id="歌词" className="pb-8 mb-8 border-b">
          <DomLyric />
        </div>
        <div id="工具" className="pb-8 mb-8 border-b">
          <DomTool />
        </div>
        <div id="关于网易云音乐">
          <DomAbout />
        </div>
      </div>
    </div>
  );
});
