import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const Empty = () => (
  <div className="empty">
    <div className="ui_gray text">您还没添加任何歌曲！</div>
    <div className="ui_gray">
      去首页
      <Link to="/">发现音乐</Link>
    </div>
  </div>
);

export default () => {
  const { playlist = [], history = [] } = useSelector(({ common }) => common);
  const [currentData, setCurrentData] = useState(playlist);
  return (
    <div id="playlist">
      <div className="nav">
        <button type="button" className="nav_link on" onClick={() => setCurrentData(playlist)}>
          播放列表
        </button>
        <button type="button" className="nav_link" onClick={() => setCurrentData(history)}>历史记录</button>
      </div>
      <div className={classnames('actions', { disabled: currentData.length === 0 })}>
        <span className="ui_gray">
          总
          {currentData.length}
          首
        </span>
        <div className="right">
          <button type="button" className="action flex-center">
            <svg className="icon icon-tabler icon-tabler-folder-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
              <line x1="12" y1="10" x2="12" y2="16" />
              <line x1="9" y1="13" x2="15" y2="13" />
            </svg>
            收藏全部
          </button>
          <span />
          <button type="button" className="action flex-center">
            <svg className="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
            删除
          </button>
        </div>
      </div>
      <div className="overflow-auto">
        {currentData.length ? <div /> : <Empty />}
      </div>
    </div>
  );
};
