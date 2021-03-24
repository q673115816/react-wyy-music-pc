import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { apiSongDetail } from '@/api';
import DomHeart from '@/components/Table/Heart';
import DomDownload from '@/components/Table/Download';
import DomArtists from '@/components/Table/Artists';
import DomTags from '@/components/Tags';

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
    <div>
      <div className="grid " style={{ gridTemplateColumns: '56px 28px 28px 8fr 4fr 5fr 2fr' }}>
        <div />
        <div />
        <div />
        <div className="px-1 hover:bg-gray-200 text-gray-500 h-8 leading-8">音乐标题</div>
        <div className="px-1 hover:bg-gray-200 text-gray-500 h-8 leading-8">歌手</div>
        <div className="px-1 hover:bg-gray-200 text-gray-500 h-8 leading-8">专辑</div>
        <div className="px-1 hover:bg-gray-200 text-gray-500 h-8 leading-8">时长</div>
      </div>
      {songs.map((song, index) => (
        <div
          tabIndex="2"
          key={song.id}
          className={classNames('grid h-8 items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100', index % 2 === 0 && 'bg-gray-50')}
          style={{ gridTemplateColumns: '56px 28px 28px 8fr 4fr 5fr 2fr' }}
        >
          <div className="text-gray-300 text-right pr-2">
            {String(index + 1).padStart(2, 0)}
          </div>
          <div className="px-1">
            <DomHeart item={song} />
          </div>
          <div className="px-1">
            <DomDownload />
          </div>
          <div className="px-1 flex">
            <span className="truncate">
              {song.name}
              {
                song.alia.length > 0
                && (
                <span className="text-gray-400">
                  （
                  {song.alia}
                  ）
                </span>
                )
              }
            </span>
            <DomTags item={song} />
          </div>
          <div className="truncate text-gray-500 px-1">
            <DomArtists artists={song.ar} />
          </div>
          <div className="truncate px-1">
            <Link to={`/playlist/album/${song.al.id}`} className="ui_text_black_hover">
              {song.al.name}
            </Link>
          </div>
          <div className="text-gray-500 px-1">
            {dayjs(song.dt).format('mm:ss')}
          </div>
        </div>
      ))}
    </div>
  );
};
