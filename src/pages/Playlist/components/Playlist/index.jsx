import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { apiSongDetail } from '@/api';

import DomMenuCreate from '@/components/MenuCreate';
import DomRank from '@/components/Table/Rank';
import DomHeart from '@/components/Table/Heart';
import DomDownload from '@/components/Table/Download';
import DomName from '@/components/Table/Name';
import DomArtists from '@/components/Table/Artists';
import DomAlbum from '@/components/Table/Album';
import DomPop from '@/components/Table/Pop';

export default ({ trackIds = [] }) => {
  const [songs, setSongs] = useState([]);
  const handleInit = async () => {
    try {
      const { songs } = await apiSongDetail({
        ids: trackIds,
      });
      setSongs(songs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div style={{ '--ui_grid_template': '36px / 54px 30px 30px 36% 4fr 6fr 2fr' }}>
      <div className="grid ui_grid_template">
        <div />
        <div />
        <div />
        <div className="px-1 hover:bg-gray-200 text-gray-500">音乐标题</div>
        <div className="px-1 hover:bg-gray-200 text-gray-500">歌手</div>
        <div className="px-1 hover:bg-gray-200 text-gray-500">专辑</div>
        <div className="px-1 hover:bg-gray-200 text-gray-500">时长</div>
      </div>
      {songs.map((item, index) => (
        <DomMenuCreate type="song" key={item.id}>
          <div
            tabIndex="2"
            className={classNames('grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template', index % 2 === 0 && 'bg-gray-50')}
          >
            <div className="pr-2">
              <DomRank index={index} id={item.id} />
            </div>
            <div className="px-1">
              <DomHeart item={item} />
            </div>
            <div className="px-1">
              <DomDownload />
            </div>
            <div className="px-1">
              <DomName item={item} />
            </div>
            <div className="truncate text-gray-500 px-1">
              <DomArtists artists={item.ar} />
            </div>
            <div className="truncate px-1">
              <DomAlbum name={item.al.name} id={item.al.id} />
            </div>
            <div className="text-gray-500 px-1">
              {dayjs(item.dt).format('mm:ss')}
            </div>
          </div>
        </DomMenuCreate>
      ))}
    </div>
  );
};
