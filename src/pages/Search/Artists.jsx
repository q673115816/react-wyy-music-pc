import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { IconUser } from '@tabler/icons';

export default ({ artists = [] }) => (
  <div className="artists_list _list">
    {artists.map((item, index) => (
      <div className={classnames('item relative flex items-center hover:bg-gray-100', { 'bg-gray-50': index % 2 === 1 })} key={item.id}>
        <Link to={`/artist/${item.id}`} className="absolute inset-0" />
        <div className="cover">
          <img className="containimg" src={`${item.img1v1Url}?param=100y100`} alt="" />
        </div>
        <div className="name">
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
          && <span className="account flex-center"><IconUser size={12} stroke={3} /></span>}
      </div>
    ))}
  </div>
);
