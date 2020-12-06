import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';

export default ({ mv = [] }) => (
  <div className="domHome_recommend_mv">
    {
      mv.map((item) => (
        <div className="item" key={item.id}>
          <div className="cover">
            <Link to="/mv/:id">
              <div className="copywriter">{item.copywriter}</div>
              <div className="playCount">{item.playCount}</div>
              <Lazyload>
                <img className="containimg" src={item.picUrl} alt="" />
              </Lazyload>
            </Link>
          </div>
          <div className="name text-overflow">
            <Link className="" to="/mv/:id">
              {item.name}
            </Link>
          </div>
          <div className="artist text-overflow">
            {
              item.artists.map((artist) => <Link to="/artist/:id" key={artist.id}>{artist.name}</Link>)
            }
          </div>
        </div>
      ))
    }
  </div>
);
