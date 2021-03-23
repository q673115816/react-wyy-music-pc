import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { apiSongDetail } from '@/api';

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
      {songs.map((song, index) => (
        <div
          tabIndex="2"
          key={song.id}
          className={classNames('flex h-8 items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100', index % 2 === 0 && 'bg-gray-50')}
        >
          <div className="text-gray-300 w-10 text-right pr-2">{String(index + 1).padStart(2, 0)}</div>
          <div><i /></div>
          <div><i /></div>
          <div className="flex-auto">{song.name}</div>
          <div>
            {song.ar.map((artist, index) => (
              <span key={artist.id}>
                {index > 0 && ' / '}
                <Link to={`/artist/${artist.id}`} className="ui_text_gray_hover">
                  {artist.name}
                </Link>
              </span>
            ))}
          </div>
          <div>
            <Link to={`/playlist/album/${song.al.id}`} className="ui_text_gray_hover">
              {song.al.name}
            </Link>
          </div>
          <div className="text-gray-500">
            {dayjs(song.dt).format('mm:ss')}
          </div>
        </div>
      ))}
    </div>
  );
};
