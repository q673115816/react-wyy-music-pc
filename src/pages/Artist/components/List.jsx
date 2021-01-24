import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default ({ hotAlbums = [] }) => (
  <div className="list">
    {
            hotAlbums.map((item) => (
              <div className="list_item" key={item.id}>
                <Link className="cover" to={`/playlist/album/${item.id}`}>
                  <img className="ui_containimg" src={`${item.picUrl}?param=100y100`} alt="" />
                </Link>
                <Link
                  className="name truncate"
                  to={`/playlist/album/${item.id}`}
                >
                  {item.name}
                      &nbsp;
                  <span className="text-gray-400">
                    {item.alias.map((alia) => alia)}
                  </span>
                </Link>
                <span className="size text-gray-400">
                  {item.size}
                  首
                </span>
                <span className="publishTime text-gray-400">
                  发行时间：
                  {dayjs(item.publishTime).format('YYYY-MM-DD')}
                </span>
              </div>
            ))
        }
  </div>
);
