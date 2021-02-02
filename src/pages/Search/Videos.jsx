import React from 'react';
import Lazyload from 'react-lazyload';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';

const type = {
  0: 'mv',
  1: 'video',
};

export default ({ videos = [] }) => (
  <div className="videos_list">
    <div className="ui_grid rectangle_width col_3">
      {
        videos.map((item) => (
          <div className="item" key={item.id}>
            <div className="cover">
              <div className="inner">
                <Link to={`/player/${type[item.type]}/${item.vid}`}>
                  <Lazyload overflow>
                    <img className="containimg" src={item.coverUrl} alt="" />
                  </Lazyload>
                  <div className="rt whitetext">
                    {transPlayCount(item.playTime)}
                  </div>
                  <div className="rb whitetext">
                    {dayjs(item.durationms).format('mm:ss')}
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-2 text-gray-600 hover:text-black truncate">
              <Link to={`/player/${type[item.type]}/${item.vid}`}>
                {item.type === 0
                  && (
                  <span className="TAG mr-1">MV</span>
                  )}
                {item.title}
              </Link>
            </div>
            <div className="mt-2 truncate text-gray-300">
              by
              &nbsp;
              <Link to={`/user/${item.creator[0].userId}`} className="text-gray-300 hover:text-gray-400 hover">
                {item.creator[0].userName}
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);
