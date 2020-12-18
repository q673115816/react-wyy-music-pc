import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';

export default ({ privatecontent = [] }) => (
  <div className="domHome_recommend_privatecontent">
    {
      privatecontent.map((item) => (
        <div className="item" key={item.id}>
          <div className="cover">
            <Link to="/">
              <span className="ico">
                <svg className="icon icon-tabler icon-tabler-player-play" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 4v16l13 -8z" />
                </svg>
              </span>
              <Lazyload>
                <img className="ui_containimg" src={item.sPicUrl} alt="" />
              </Lazyload>
            </Link>
          </div>
          <div className="name">
            <Link to="/">{item.name}</Link>
          </div>
        </div>
      ))
    }
  </div>
);
