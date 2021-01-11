import React from 'react';
import { Link } from 'react-router-dom';
import { DomMale, DomFamale } from '@/components/Gender';

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
            {item.gender === 1 && <DomMale size={12} />}
            {item.gender === 2 && <DomFamale size={12} />}
          </div>
          <div className="signature ui_gray">{item.signature}</div>
        </Link>
      ))
    }
  </div>
);
