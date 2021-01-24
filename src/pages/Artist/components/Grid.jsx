import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default ({ hotAlbums = [] }) => (
  <div className="grid">
    <div className="ui_grid col_4">
      {hotAlbums.map((item) => (
        <div className="item" key={item.id}>
          <div className="cover">
            <div className="inner">
              <Link to={`/playlist/album/${item.id}`}>
                <img className="ui_containimg" src={`${item.picUrl}?param=200y200`} alt="" />
              </Link>
            </div>
          </div>
          <div className="footer">
            <div className="name">
              {item.name}
            </div>
          </div>
          <div className="text-gray-400">{dayjs(item.publishTime).format('YYYY-MM-DD')}</div>
        </div>
      ))}
    </div>
  </div>
);
