import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { IconTrash, IconFolderPlus } from '@tabler/icons';
import { setPopup } from '@/redux/actions';

const Empty = () => {
  const dispatch = useDispatch();
  return (
    <div className="empty">
      <div className="ui_gray text">您还没添加任何歌曲！</div>
      <div className="ui_gray">
        去首页
        <Link to="/" onClick={() => dispatch(setPopup({ popupStatus: '' }))}>发现音乐</Link>
      </div>
    </div>
  );
};

export default () => {
  const { playlist = [], history = [], volume } = useSelector(({ common }) => common);
  const [currentData, setCurrentData] = useState(playlist);
  return (
    <div id="playlist">
      <div className="nav">
        <button type="button" className="nav_link on" onClick={() => setCurrentData(playlist)}>
          播放列表
        </button>
        <button
          type="button"
          className="nav_link"
          onClick={() => setCurrentData(history)}
        >
          历史记录
        </button>
      </div>
      <div className={classnames('actions', { disabled: currentData.length === 0 })}>
        <span className="ui_gray">
          总
          {currentData.length}
          首
        </span>
        <div className="right">
          <button type="button" className="action flex-center">
            <IconFolderPlus size={20} />
            收藏全部
          </button>
          <span />
          <button type="button" className="action flex-center">
            <IconTrash size={20} />
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
