import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import {
  IconTrash,
  IconFolderPlus,
  IconLink,
  IconPlayerPlay,
  IconPlayerPause,
} from '@tabler/icons';
import { setAudioPlaylistClear, setAudioHistoryClear } from '@/reducers/audio/actions';
import { setPopupPlaylistToggle } from '@/reducers/mask/actions';
import DomName from '@/components/Table/Name';
import DomMenuCreate from '@/components/MenuCreate';
import './style.scss';

const Empty = () => {
  const dispatch = useDispatch();
  return (
    <div className="empty w-min m-auto pt-20 whitespace-nowrap">
      <div className="text-gray-400 text-sm text">
        您还没添加任何歌曲！
      </div>
      <div className="text-gray-400 mt-6">
        去首页
        <Link
          to="/"
          className="ui_text_black_hover underline"
          onClick={() => dispatch(setPopupPlaylistToggle({}))}
        >
          发现音乐
        </Link>
      </div>
    </div>
  );
};

const DomList = ({ list = [], currentId, current = '' }) => {
  if (list.length === 0) return <Empty />;
  const { running } = useSelector(({ audio }) => audio);
  return (
    <div>
      {
      list.map((item, index) => (
        <DomMenuCreate
          schema={[
            ['评论',
              '播放'],
            ['收藏到歌单',
              '分享',
              '复制链接',
              '不感兴趣',
              '下载'],
          ]}
          type="song"
          item={item}
          key={item.id}
        >
          <div
            tabIndex="2"
            className={classNames('flex items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none h-9 group ', { 'bg-gray-50': index % 2 === 1, ui_themeColor: current === 'playlist' && item.id === currentId })}

          >
            <div className="w-6 flex-center flex-none">
              {
                current === 'playlist'
                && item.id === currentId
                && (running ? <IconPlayerPlay className="fill-current ui_themeColor" size={12} />
                  : <IconPlayerPause size={12} className="fill-current ui_themeColor" stroke={1} />)
              }
            </div>
            <div className="name flex-auto w-0">
              <DomName item={item} />
            </div>
            <div className="w-24 px-1 flex-none truncate text-gray-500 group-hover:text-black">
              {item.ar.map((artist, index) => (
                <span key={artist.id}>
                  {index > 0 && ' / '}
                  <Link to={`/artist/${artist.id}`}>
                    {artist.name}
                  </Link>
                </span>
              ))}
            </div>
            <div className="w-8 px-1 flex-none">
              <Link to="/">
                <IconLink size={16} stroke={1} />
              </Link>
            </div>
            <div className="w-16 px-1 flex-none text-gray-300 group-hover:text-black">
              {dayjs(item.dt).format('mm:ss')}
            </div>
          </div>
        </DomMenuCreate>
      ))
    }
    </div>
  );
};

const navs = [
  {
    name: '播放列表',
    code: 'playlist',
  },
  {
    name: '历史记录',
    code: 'history',
  },
];

export default () => {
  const dispatch = useDispatch();
  const { popupStatus } = useSelector(({ mask }) => mask);
  const audio = useSelector(({ audio }) => audio);
  const { currentSong, playlist, history } = audio;
  const [current, setCurrent] = useState('playlist');
  const handleClear = () => {
    if (audio[current].length === 0) {
      return false;
    }
    // console.log('handleClear');
    switch (current) {
      case 'playlist':
        return dispatch(setAudioPlaylistClear());
      case 'history':
        return dispatch(setAudioHistoryClear());
      default:
        break;
    }
  };
  if (popupStatus !== 'playlist') return null;
  return (
    <div id="playlist" className="absolute right-0 shadow bg-white z-40 flex flex-col">
      <div className="px-5 flex-none">
        <div className="nav my-5 border w-min flex rounded-full m-auto">
          {
            navs.map(({ name, code }) => (
              <button
                key={name}
                type="button"
                className={classNames('nav_link w-24 h-8 rounded-full', code === current ? 'bg-gray-400 text-white' : 'hover:bg-gray-200')}
                onClick={() => setCurrent(code)}
              >
                {name}
              </button>
            ))
          }
        </div>
        <div className="actions flex items-center pb-2.5 border-b">
          <span className="text-gray-400">
            总
            {audio[current].length}
            首
          </span>
          <div className="right ml-auto flex divide-x">
            {
              current === 'playlist'
              && (
              <button
                type="button"
                className={classNames('action px-5 flex-center', { 'text-gray-300': audio[current].length === 0 })}
              >
                <IconFolderPlus size={20} stroke={1} />
                收藏全部
              </button>
              )
            }
            <button
              type="button"
              onClick={handleClear}
              className={classNames('action px-5 flex-center', { 'text-gray-300': audio[current].length === 0 })}
            >
              <IconTrash size={20} stroke={1} />
              清空
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-auto h-full flex-auto">
        <DomList
          list={audio[current]}
          current={current}
          currentId={currentSong.id}
        />
      </div>
    </div>
  );
};
