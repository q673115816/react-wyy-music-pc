import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { IconPlayerPlay, IconFolderPlus } from '@tabler/icons';
import { transPlayCount } from '@/common/utils';

export default ({ list = [] }) => (
  <div>
    {list.map((item, index) => (
      <div key={item.id} className={classNames('hover:bg-gray-100 pl-8 py-3 flex items-center', { 'bg-gray-50': index % 2 === 0 })}>
        <Link to={`/playlist/music/${item.id}`} className="rounded overflow-hidden relative group">
          <img src={`${item.coverImgUrl}?param=60y60`} alt="" />
          <button type="button" className="absolute rounded-full bg-white bg-opacity-90 inset-0 flex-center m-auto w-6 h-6 ui_themeColor opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <IconPlayerPlay size={16} className="fill-current" />
          </button>
        </Link>
        <Link to={`/playlist/music/${item.id}`} className="flex-auto w-0 px-3 truncate text-sm ui_text_black_hover">
          {item.name}
        </Link>
        <span className="px-3 count text-gray-400" style={{ width: `${1 / 7 * 100}%` }}>
          歌曲：
          {item.trackCount}
        </span>
        <span className="px-3 creator truncate text-gray-300" style={{ width: `${1 / 7 * 100}%` }}>
          by
          <Link to={`/user/${item.userId}`} className="ui_text_gray_hover">{item.creator.nickname}</Link>
        </span>
        <button type="button" className="px-3 subscribed flex items-center ui_text_gray_hover" style={{ width: `${1 / 7 * 100}%` }}>
          <IconFolderPlus size={16} />
          {item.subscribedCount}
        </button>
        <button type="button" className="px-3 playCount flex items-center ui_text_gray_hover" style={{ width: `${1 / 7 * 100}%` }}>
          <IconPlayerPlay size={16} />
          {transPlayCount(item.playCount)}
        </button>
      </div>
    ))}
  </div>
);
