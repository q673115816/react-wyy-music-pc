import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import {
  IconTrash, IconFolderPlus, IconLink, IconPlayerPlay, IconPlayerPause,
} from '@tabler/icons';
import { setPopup, setAudioClear } from '@/redux/actions';

const Empty = () => {
  const dispatch = useDispatch();
  return (
    <div className="empty">
      <div className="text-gray-400 text">您还没添加任何歌曲！</div>
      <div className="text-gray-400">
        去首页
        <Link to="/" onClick={() => dispatch(setPopup({ popupStatus: '' }))}>发现音乐</Link>
      </div>
    </div>
  );
};

const DomList = ({ list = [], currentId }) => {
  if (list.length === 0) return <Empty />;
  const { running } = useSelector(({ audio }) => audio);
  return (
    <div>
      {
      list.map((item, index) => (
        <div
          tabIndex="2"
          className={classnames('flex items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none h-9', { 'bg-gray-50': index % 2 === 1, ui_themeColor: item.id === currentId })}
          key={item.id}
        >
          <div className="w-6">
            {
              item.id === currentId
              && running ? <IconPlayerPlay size={12} />
                : <IconPlayerPause size={12} />
            }
          </div>
          <div className="flex-auto truncate">
            {item.name}
          </div>
          <div className="w-24 px-1 flex-none truncate">
            {item.ar.map((artist, index) => (
              <span key={artist.id}>
                {index > 0 && ' / '}
                <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
              </span>
            ))}
          </div>
          <div className="w-8 px-1 flex-none">
            <Link to="/">
              <IconLink size={16} stroke={1} />
            </Link>
          </div>
          <div className="w-16 px-1 flex-none text-gray-300">
            {dayjs(item.dt).format('mm:ss')}
          </div>
        </div>
      ))
    }
    </div>
  );
};

export default () => {
  const dispatch = useDispatch();
  const audio = useSelector(({ audio }) => audio);
  const { currentSong, playlist, history } = audio;
  const [current, setCurrent] = useState('playlist');
  const handleClear = () => {
    if (audio[current].length === 0) {
      return false;
    }
    // console.log('handleClear');
    return dispatch(setAudioClear());
  };
  return (
    <div id="playlist">
      <div className="p-6">
        <div className="nav">
          <button type="button" className="nav_link on" onClick={() => setCurrent('playlist')}>
            播放列表
          </button>
          <button
            type="button"
            className="nav_link"
            onClick={() => setCurrent('history')}
          >
            历史记录
          </button>
        </div>
        <div className="actions">
          <span className="text-gray-400">
            总
            {audio[current].length}
            首
          </span>
          <div className="right divide-x">
            <button type="button" className={classnames('action px-5 flex-center', { 'text-gray-300': audio[current].length === 0 })}>
              <IconFolderPlus size={20} stroke={1} />
              收藏全部
            </button>
            <button
              type="button"
              onClick={handleClear}
              className={classnames('action px-5 flex-center', { 'text-gray-300': audio[current].length === 0 })}
            >
              <IconTrash size={20} stroke={1} />
              清空
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-auto max-h-full flex-auto">
        <DomList list={audio[current]} currentId={currentSong.id} />
      </div>
    </div>
  );
};
