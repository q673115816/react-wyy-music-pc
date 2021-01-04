import React from 'react';
import { Link } from 'react-router-dom';

export default ({ userprofiles = [] }) => (
  <div className="userprofiles_list _list">
    {
      userprofiles.map((item) => (
        <Link to={`/user/${item.userId}`} className="item" key={item.userId}>
          <div className="cover">
            <img src={`${item.avatarUrl}?param=100y100`} alt="" />
          </div>
          <div className="name">
            {item.nickname}
            &nbsp;
            {item.gender === 1 && <span className="male">♂️</span>}
            {item.gender === 2 && <span className="famale">♀️</span>}
          </div>
          <div className="signature gray">{item.signature}</div>
        </Link>
      ))
    }
  </div>
);
