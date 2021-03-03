import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { IconPlayerPlay } from '@tabler/icons';

export default ({ hotAlbums = [] }) => (
  <div className="grid grid-cols-4 p-8 gap-x-20 gap-y-5">
    {hotAlbums.map((item) => (
      <div className="item" key={item.id}>
        <div className="cover rounded overflow-hidden relative group">
          <Link to={`/playlist/album/${item.id}`}>
            <img className="" src={`${item.picUrl}?param=200y200`} alt="" />
          </Link>
          <button type="button" className="absolute inset-0 ui_themeColor flex-center m-auto w-10 h-10 rounded-full bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <IconPlayerPlay size={20} className="fill-current" />
          </button>
        </div>
        <div className="name text-sm mt-2">
          <Link to={`/playlist/album/${item.id}`} className="ui_ellipse">
            <span className="ui_text_black_hover">
              {item.name}
            </span>
            {
              item.alias.map((alia) => (
                <span className="text-gray-500" key={alia}>
                  （
                  {alia}
                  ）
                </span>
              ))
            }
          </Link>
        </div>
        <div className="text-gray-400 mt-2">
          {dayjs(item.publishTime).format('YYYY-MM-DD')}
        </div>
      </div>
    ))}
  </div>
);
