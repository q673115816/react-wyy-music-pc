import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default ({ djRadios = [] }) => (
  <div className="djRadios_list _list">
    {
      djRadios.map((item, index) => (
        <div className={classnames('item flex items-center hover:bg-gray-100', { 'bg-gray-50': index % 2 === 0 })} key={item.id}>
          <Link
            to={`/playlist/dj/${item.id}`}
            className="cover"
          >
            <img className="containimg" src={item.picUrl} alt="" />
          </Link>
          <Link
            to={`/playlist/dj/${item.id}`}
            className="name"
          >
            {item.name}
          </Link>
          <div className="dj text-gray-400">
            by
            &nbsp;
            <Link
              to={`/user/${item.dj.userId}`}
              className="text-gray-400 hover:text-gray-600"
            >
              {item.dj.nickname}
            </Link>
          </div>
        </div>
      ))
    }
  </div>
);
