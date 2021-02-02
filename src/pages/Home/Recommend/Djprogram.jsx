import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';

export default ({ djprogram = [] }) => (
  <div className="domHome_recommend_djprogram ui_grid square mt-4">
    {
      djprogram.slice(0, 5).map((item) => (
        <div className="item" key={item.id}>
          <div className="cover border">
            <div className="inner">
              <Link to={`/playlist/dj/${item.program?.radio?.id}`}>
                <Lazyload>
                  <img
                    className="ui_containimg"
                    src={`${item.program?.radio?.picUrl}?param=200y200`}
                    alt=""
                  />
                </Lazyload>
                <div className="mask" />
                <div className="absolute left-0 right-0 bottom-0 p-2">
                  <div className="text-white truncate">
                    {item.program?.radio?.name}
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="name leading-5 text-sm mt-2">
            <Link to={`/playlist/dj/${item.program?.radio?.id}`} className="text-gray-600 hover:text-black">
              {item.program?.radio?.rcmdText}
            </Link>
          </div>
        </div>
      ))
    }
  </div>
);
