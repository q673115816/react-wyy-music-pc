import React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import DomMenuCreate from '@/components/MenuCreate';
import DomRank from '@/components/Table/Rank';
import DomHeart from '@/components/Table/Heart';
import DomDownload from '@/components/Table/Download';
import DomName from '@/components/Table/Name';
import DomArtists from '@/components/Table/Artists';
import DomAlbum from '@/components/Table/Album';

export default ({ songs = [] }) => {
  if (songs.length === 0) {
    return (
      <div className="pt-16 text-center text-sm text-gray-400">暂无音乐</div>
    );
  }
  return (
    <div style={{ '--ui_grid_template': '36px / 54px 30px 30px 36% 4fr 6fr 2fr' }}>
      <div className="grid ui_grid_template">
        <div />
        <div />
        <div />
        <div className="px-1 flex items-center hover:bg-gray-200 text-gray-500">音乐标题</div>
        <div className="px-1 flex items-center hover:bg-gray-200 text-gray-500">歌手</div>
        <div className="px-1 flex items-center hover:bg-gray-200 text-gray-500">专辑</div>
        <div className="px-1 flex items-center hover:bg-gray-200 text-gray-500">时长</div>
      </div>
      {songs.map((item, index) => (
        <DomMenuCreate
          sechma={[
            ['评论',
              '播放',
              '下一首播放'],
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
            className={classNames('grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template', index % 2 === 0 && 'bg-gray-50')}
          >
            <div className="pr-2">
              <DomRank index={index} id={item.id} />
            </div>
            <div className="px-1">
              <DomHeart id={item.id} />
            </div>
            <div className="px-1">
              <DomDownload />
            </div>
            <DomName className="px-1" item={item} />
            <DomArtists className="px-1" artists={item.ar} />
            <DomAlbum className="px-1" name={item.al.name} id={item.al.id} />
            <div className="text-gray-500 px-1">
              {dayjs(item.dt).format('mm:ss')}
            </div>
          </div>
        </DomMenuCreate>
      ))}
    </div>
  );
};
