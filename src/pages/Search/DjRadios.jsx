import React from 'react';
import { Link } from 'react-router-dom';

export default ({ djRadios = [] }) => (
  <div className="djRadios_list _list">
    {
      djRadios.map((item) => (
        <Link to={`/playlist/dj/${item.id}`} className="item" key={item.id}>
          <div className="cover">
            <img className="containimg" src={item.picUrl} alt="" />
          </div>
          <div className="name">{item.name}</div>
          <div className="dj ui_gray">
            by
            &nbsp;
            <Link to={`/user/${item.dj.userId}`} className="ui_gray hover">{item.dj.nickname}</Link>
          </div>
        </Link>
      ))
    }
  </div>
);
