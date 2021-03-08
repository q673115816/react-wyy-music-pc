import React from 'react';
import { Link } from 'react-router-dom';
import { transPlayCount } from '@/common/utils';
import { IconPlayerPlay } from '@tabler/icons';
import dayjs from 'dayjs';
import { playerTypes } from '@/common/config';

export default ({ item = {}, options }) => (
  <div className="item">
    <div className="cover relative ui_aspect-ratio-16/9 border rounded overflow-hidden">
      <Link
        to={`/player/${playerTypes[item.type]}/${item[options.id]}`}
        className="absolute inset-0"
      >
        <img
          className="h-full object-cover w-full"
          src={item[options.src]}
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 h-1/4 ui_linear_mask_top" />
        <div className="absolute top-0 right-0 my-1 mx-2 text-white flex-center">
          <IconPlayerPlay size={12} />
          &nbsp;
          {transPlayCount(item[options.playCount])}
        </div>
        {options.duration
          && (
            <>
              <div className="mask absolute left-0 right-0 bottom-0 h-1/4 ui_linear_mask_bottom" />
              <div className="absolute bottom-0 right-0 my-1 mx-2 text-white">
                {dayjs(item[options.duration]).format('mm:ss')}
              </div>
            </>
          )}
      </Link>
    </div>
    <Link
      to={`/player/${playerTypes[item.type]}/${item[options.id]}`}
      className="text-sm ui_text_black_hover mt-2 flex items-center"
      title={item[options.name]}
    >
      {item.type === 0
        && <div className="text-red-500 border leading-none border-current text-xs rounded-sm">MV</div>}
        &nbsp;
      <span className="flex-auto w-px truncate">
        {item[options.name]}
      </span>
    </Link>
    {/* {
      item[options.artists]
      && (
        <div className="mt-1 truncate">
          {item.type === 1 && 'by&nbsp;'}
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
    } */}
  </div>
);
