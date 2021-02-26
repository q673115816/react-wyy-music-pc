import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';

export default ({ mv = [] }) => (
  <div className="domHome_recommend_mv grid gap-x-5 grid-cols-3 mt-4">
    {
      mv.map((item) => (
        <div className="item" key={item.id}>
          <div className="cover border relative overflow-hidden group rounded">
            <Link to="/mv/:id">
              <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-gray-400 to-transparent" />
              <div className="copywriter absolute top-0 left-0 right-0 bg-black bg-opacity-40 px-2 py-3 text-white transiton duration-100 ease-in">
                {item.copywriter}
              </div>
              <div className="playCount absolute top-0 right-0 px-2 py-1 text-white group-hover:opacity-0">
                {item.playCount}
              </div>
              <Lazyload>
                <img className="" src={item.picUrl} alt="" />
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
              item.artists.map((artist, index) => (
                <span key={artist.id}>
                  {index > 0 && ' / '}
                  <Link
                    to="/artist/:id"
                    className="text-gray-600 hover:text-black"
                  >
                    {artist.name}
                  </Link>
                </span>
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
);
