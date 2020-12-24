import React, { useState } from 'react';
import classnames from 'classnames';
import Search from '@/components/HeaderBarSearch';

export default () => {
  const [visibility, setVisibility] = useState(false);
  const [search, setSearch] = useState('');
  const handleToggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="domManage">
      <div className="domManage_header">
        <span className="domManage_header_title h1">我的音乐云盘</span>
      </div>
      <div className="ui_headerBar">
        <span className="title">
          <b>收藏的专辑</b>
        </span>
        <div className="right">
          <Search {...{ search, setSearch, placeholder: '搜索我的音乐云盘' }} />
        </div>
      </div>
      <div className="domManage_list overflow-auto" />
      <div className="domManage_dialog" style={{ display: visibility ? '' : 'none' }}>
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
