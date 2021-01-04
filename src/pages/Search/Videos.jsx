import React from 'react';
import Lazyload from 'react-lazyload';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';

export default ({ videos = [] }) => (
  <div className="videos_list ">
    <div className="ui_grid rectangle_width col_3">
      {
        videos.map((item) => (
          <div className="item" key={item.id}>
            <div className="cover">
              <div className="inner">
                <Link to={`/player/video/${item.vid}`}>
                  <Lazyload overflow>
                    <img className="containimg" src={item.coverUrl} alt="" />
                  </Lazyload>
                  <div className="rt whitetext">{transPlayCount(item.playTime)}</div>
                  <div className="rb whitetext">
                    {dayjs(item.durationms).format('mm:ss')}
                  </div>
                </Link>
              </div>
            </div>
            <div className="footer text-overflow">
              <Link to="/">
                {item.title}
              </Link>
            </div>
            <div className="text text-overflow gray">
              by
              &nbsp;
              <Link to="/" className="gray hover">
                {item.creator[0].userName}
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);
