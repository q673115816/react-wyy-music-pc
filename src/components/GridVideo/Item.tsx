import React from 'react';
import { Link } from 'react-router-dom';
import { transPlayCount } from '@/common/utils';
import { IconPlayerPlay } from '@tabler/icons';
import dayjs from 'dayjs';
import { playerTypes } from '@/common/config';
import DomTagMV from '@/components/Tags/Box';

export default ({ item = {}, item: { type = 1 } }) => (
  <div className="item">
    <div className="cover relative border rounded overflow-hidden">
      <Link
        to={`/player/${playerTypes[type]}/${item.id}`}
        className="absolute inset-0"
      >
        <img
          loading={'lazy'}
          className="h-full object-cover w-full ui_aspect-ratio-16/9"
          src={item.cover}
          alt=""
        />
        {item.playCount && (
          <>
            <div className="absolute top-0 left-0 right-0 h-1/4 ui_linear_mask_top" />
            <div className="absolute top-0 right-0 my-0.5 mx-2 text-white flex-center">
              <IconPlayerPlay size={12} />
              &nbsp;
              {transPlayCount(item.playCount)}
            </div>
          </>
        )}
        {item.duration
          && (
            <>
              <div className="mask absolute left-0 right-0 bottom-0 h-1/4 ui_linear_mask_bottom" />
              <div className="absolute bottom-0 right-0 my-0.5 mx-2 text-white">
                {dayjs(item.duration).format('mm:ss')}
              </div>
            </>
          )}
      </Link>
      {
        item.briefDesc
        && <div className="absolute left-0 bottom-0 mx-1 my-1.5 text-white ">{item.briefDesc}</div>
      }
    </div>
    <Link
      to={`/player/${playerTypes[type]}/${item.id}`}
      className="ui_text_black_hover mt-2 flex items-center"
      title={item.title}
    >
      {item.type === 0
        && (
        <DomTagMV />
        )}
        &nbsp;
      <span className="text-sm flex-auto w-px truncate">
        {item.title}
      </span>
    </Link>
    {
      item.creator
        && (
        <div className="mt-1 truncate text-gray-300">
          {item.type === 1 && (
          <>
            by&nbsp;
          </>
          )}
          {
            item.creator.map((creator, index) => (
              <span key={creator.userId}>
                {index > 0 && ' / '}
                <Link
                  to={`/artist/${creator.userId}`}
                  className="ui_text_gray_hover"
                >
                  {creator.userName}
                </Link>
              </span>
            ))
              }
        </div>
        )
    }
  </div>
);
