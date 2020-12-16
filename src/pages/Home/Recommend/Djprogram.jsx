import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';

export default ({ djprogram = [] }) => (
  <div className="domHome_recommend_djprogram ui_grid square">
    {
      djprogram.slice(0, 5).map((item) => (
        <div className="item" key={item.id}>
          <div className="cover">
            <div className="inner">
              <Link to="/dj">
                <Lazyload>
                  <img className="ui_containimg" src={`${item.program.coverUrl}?param=200y200`} alt="" />
                </Lazyload>
                <div className="mask" />
                <div className="lb">
                  <div className="name text-overflow">{item.name}</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="name">
            <Link to="/">
              {item.name}
            </Link>
          </div>
        </div>
      ))
    }
  </div>
);
