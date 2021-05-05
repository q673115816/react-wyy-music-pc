import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';

export default memo(({ djprogram = [] }) => (
  <div className="domHome_recommend_djprogram grid grid-cols-5 gap-5 mt-4">
    {
      djprogram.slice(0, 5).map((item) => (
        <div className="item" key={item.id}>
          <div className="cover border relative rounded overflow-hidden ">
            <Link to={`/playlist/dj/${item.program?.radio?.id}`} className="ui_aspect-ratio-1/1">
              <Lazyload overflow resize>
                <img
                  className=""
                  src={`${item.program.radio.picUrl}?param=200y200`}
                  alt=""
                />
              </Lazyload>
              <div className="mask absolute left-0 right-0 bottom-0 h-1/4 ui_linear_mask_bottom" />
              <div className="absolute left-0 right-0 bottom-0 p-2">
                <div className="text-white truncate">
                  {item.program.radio.name}
                </div>
              </div>
            </Link>
          </div>
          <div className="name leading-5 text-sm mt-2">
            <Link
              to={`/playlist/dj/${item.program.radio.id}`}
              className="text-gray-600 hover:text-black"
            >
              {item.program.radio.rcmdText}
            </Link>
          </div>
        </div>
      ))
    }
  </div>
));
