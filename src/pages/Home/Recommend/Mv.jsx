import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';

export default ({ mv = [] }) => (
  <div className="domHome_recommend_mv grid gap-x-5 grid-cols-3 mt-4">
    {
      mv.map((item) => (
        <div className="item" key={item.id}>
          <div className="cover">
            <Link to="/mv/:id">
              <div className="copywriter absolute top-0 left-0 right-0 bg-black bg-opacity-40 px-2 py-3 text-white">{item.copywriter}</div>
              <div className="playCount absolute top-0 right-0 p-2 text-white">{item.playCount}</div>
              <Lazyload>
                <img className="ui_containimg" src={item.picUrl} alt="" />
              </Lazyload>
            </Link>
          </div>
          <div className="name truncate text-sm mt-2">
            <Link className="text-gray-600 hover:text-black" to="/mv/:id">
              {item.name}
            </Link>
          </div>
          <div className="artist truncate mt-1">
            {
              item.artists.map((artist) => (
                <Link
                  to="/artist/:id"
                  className="text-gray-600 hover:text-black"
                  key={artist.id}
                >
                  {artist.name}
                </Link>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
);
