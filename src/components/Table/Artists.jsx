import classNames from 'classnames';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

export default memo(({ artists = [], className = '' }) => (artists?.length > 0 ? (
  <div className={classNames('truncate text-gray-500', className)} title={(artists.map((artist) => artist.name)).join(' / ')}>
    {artists.map((artist, index) => (
      <span key={artist.id + artist.name}>
        {index > 0 && ' / '}
        <Link to={`/artist/${artist.id}`} className="ui_text_gray_hover">
          {artist.name}
        </Link>
      </span>
    ))}
  </div>
) : <span className="text-gray-400">未知歌手</span>));
