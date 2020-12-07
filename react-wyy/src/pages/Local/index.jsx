import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default () => {
  const [visibility, setVisibility] = useState(false);
  const handleToggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="domlocal">
      <div className="domlocal_header">
        <span className="domlocal_header_title h1">本地音乐</span>
        <span className="domlocal_header_total">共0首</span>
        <button type="button" className="domlocal_header_selectFolder" onClick={handleToggleVisibility}>选择目录</button>
      </div>
      <div className="domlocal_nav">
        <NavLink
          className="domlocal_nav_link"
          activeClassName="on"
          to="/local/song"
        >
          歌曲
        </NavLink>
        <NavLink
          className="domlocal_nav_link"
          activeClassName="on"
          to="/local/singer"
        >
          歌手
        </NavLink>
        <NavLink
          className="domlocal_nav_link"
          activeClassName="on"
          to="/local/album"
        >
          专辑
        </NavLink>
        <NavLink
          className="domlocal_nav_link"
          activeClassName="on"
          to="/local/folder"
        >
          文件夹
        </NavLink>
      </div>
      <div className="domlocal_noFolder">
        <div className="domlocal_noFolder_title">请添加本地文件夹</div>
        <div className="domlocal_noFolder_tips">
          升级本地音乐为高品质音乐并和好友分享！
        </div>
        <button type="button" className="domlocal_noFolder_button" onClick={handleToggleVisibility}>选择本地音乐文件夹</button>
      </div>
      <div className="domlocal_dialog" style={{ display: visibility ? '' : 'none' }}>
        <button type="button" className="close" onClick={handleToggleVisibility}>×</button>
        <div className="title">选择本地音乐文件夹</div>
        <div className="tips">将自动扫描您勾选的目录，文件增删实时同步。</div>
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
          <button type="button" className="ui_btn red">确认</button>
          <button type="button" className="ui_btn">添加文件</button>
        </div>
      </div>
    </div>
  );
};
