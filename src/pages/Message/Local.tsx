import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
// import './style.scss';
import { setLocalCurrent } from '@/reducers/local/actions';

const nav = [
  '歌曲',
  '歌手',
  '专辑',
  '文件夹',
];

export default () => {
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const { current } = useSelector(({ local }) => local);
  const handleToggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="domManage">
      <div className="domManage_header ui_header">
        <span className="domManage_header_title h1">本地音乐</span>
        <span className="domManage_header_total">共0首</span>
        <button
          type="button"
          className="domManage_header_selectFolder"
          onClick={handleToggleVisibility}
        >
          选择目录
        </button>
      </div>
      <div className="domManage_main">
        <div className="domManage_nav">
          {nav.map((item) => (
            <button
              onClick={() => dispatch(setLocalCurrent({ current: item }))}
              key={item}
              className={classNames('domManage_nav_link focus:outline-none', item === current && 'ui_underline font-bold')}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="domManage_noFolder">
          <div className="domManage_noFolder_title">请添加本地文件夹</div>
          <div className="domManage_noFolder_tips">
            升级本地音乐为高品质音乐并和好友分享！
          </div>
          <button
            type="button"
            className="domManage_noFolder_button"
            onClick={handleToggleVisibility}
          >
            选择本地音乐文件夹
          </button>
        </div>
        <div className="domManage_dialog" style={{ display: visibility ? '' : 'none' }}>
          <button type="button" className="close" onClick={handleToggleVisibility}>×</button>
          <div className="title">
            选择本地音乐文件夹
          </div>
          <div className="tips">
            将自动扫描您勾选的目录，文件增删实时同步。
          </div>
          <ul>
            <li>
              <span className="checkbox">
                <input type="text" />
                <i className="material-icons">checkbox</i>
              </span>
              暂时没法做
            </li>
          </ul>
          <div className="actions">
            <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red">确认</button>
            <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full">添加文件</button>
          </div>
        </div>
      </div>
    </div>
  );
};
