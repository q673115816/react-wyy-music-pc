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
                <i className="material-icons">play_arrow</i>
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
