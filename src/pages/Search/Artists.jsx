import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { IconUser } from '@tabler/icons';

const layouts = {
  '--grid-template-columns': '60px 6fr min-content',
};

export default ({ artists = [] }) => (
  <div className="artists_list _list" style={layouts}>
    {artists.map((item, index) => (
      <div className={classNames('item relative grid items-center hover:bg-gray-100', { 'bg-gray-50': index % 2 === 1 })} key={item.id}>
        <Link to={`/artist/${item.id}`} className="absolute inset-0" />
        <div className="cover">
          <img className="" src={`${item.img1v1Url}?param=60y60`} alt="" />
        </div>
        <div className="name px-2.5 text-sm">
          {item.name}
          {item.alia
          && (
          <span className="text-gray-400">
            (
            {item?.alias[0]}
            )
          </span>
          )}
        </div>
        {item.accountId
          && (
          <span className="account bg-red-500 w-4 h-4 rounded-full text-white flex-center">
            <IconUser size={12} stroke={3} />
          </span>
          )}
      </div>
    ))}
  </div>
);
