import React from 'react';
import { Link } from 'react-router-dom';
import { IconUser } from '@tabler/icons';

export default ({ artists = [] }) => (
  <div className="artists_list _list">
    {artists.map((item) => (
      <Link to={`/artist/${item.id}`} className="item" key={item.id}>
        <div className="cover">
          <img className="containimg" src={`${item.img1v1Url}?param=100y100`} alt="" />
        </div>
        <div className="name">
          {item.name}
          {item.alia
          && (
          <span className="gray">
            (
            {item?.alias[0]}
            )
          </span>
          )}
        </div>
        {item.accountId
          && <span className="account flex-center"><IconUser size={12} stroke={3} /></span>}
      </Link>
    ))}
  </div>
);
