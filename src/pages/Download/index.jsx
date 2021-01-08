import React, { useState } from 'react';
import classnames from 'classnames';

const nav = [
  '已下载单曲',
  '已下载电台节目',
  '已下载MV',
  '正在下载',
];

export default () => {
  const [visibility, setVisibility] = useState(false);
  const [current, setCurrent] = useState('已下载单曲');
  const handleToggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="domManage">
      <div className="domManage_header ui_header">
        <span className="domManage_header_title h1">下载管理</span>
      </div>
      <div className="domManage_main">
        <div className="domManage_nav">
          {nav.map((item) => (
            <button
              onClick={() => setCurrent(item)}
              key={item}
              className={classnames('domManage_nav_link', { on: item === current })}
              type="button"
            >
              {item}
            </button>
          ))}
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
    </div>
  );
};
