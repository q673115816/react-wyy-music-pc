import React from 'react';
import { Link } from 'react-router-dom';
import { transPlayCount } from '@/common/utils';
import { IconPlayerPlay } from '@tabler/icons';
import dayjs from 'dayjs';

const types = {
  0: 'mv',
  1: 'video',
};

export default ({ item = {}, type = 'video', options }) => (
  <div className="item">
    <div className="cover relative ui_aspect-ratio-16/9 border rounded overflow-hidden">
      <Link
        to={`/player/${type}/${item[options.id]}`}
        className="absolute inset-0"
      >
        <img
          className="h-full object-cover w-full"
          src={item[options.src]}
          alt=""
        />
        <div className="absolute top-0 right-0 my-1 mx-2 text-white flex-center">
          <IconPlayerPlay size={12} />
          &nbsp;
          {transPlayCount(item[options.playCount])}
        </div>
        {options.duration
          && (
            <div className="absolute bottom-0 right-0 my-1 mx-2 text-white">
              {dayjs(item[options.duration]).format('mm:ss')}
            </div>
          )}
      </Link>
    </div>
    <div className="mt-2 truncate">
      <Link
        to={`/player/${type}/${item[options.id]}`}
        className="text-sm ui_text_black_hover flex items-center"
        title={item[options.name]}
      >
        {item.type === 0
        && <div className="text-red-500 border leading-none border-current text-xs rounded-sm">MV</div>}
        &nbsp;
        {item[options.name]}
      </Link>
    </div>
    {
      item.artists
    && (
    <div className="mt-1 truncate">
      {
          item.artists.map((artist, index) => (
            <span key={artist.name} className="text-gray-300">
              {index > 0 && ' / '}
              <Link
                to={`/artist/${artist.id}`}
                className="ui_text_gray_hover"
              >
                {artist.name}
              </Link>
            </span>
          ))
        }
    </div>
    )
    }
    {
      item.creator
      && (
      <div className="creator mt-1 text-gray-300">
        by&nbsp;
        <Link to={`/user/${item.creator.userId}`} className="hover:text-gray-500">
          {item.creator.nickname}
        </Link>
      </div>
      )
    }
  </div>
);
