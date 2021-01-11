import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';

export default ({ related = [] }) => (
  <div className="domVideoDetail_related">
    {
      related.map((item) => (
        <div className="item" key={item.vid}>
          <div className="cover">
            <Link to={`./${item.vid}`}>
              <img className="ui_containimg" src={item.coverUrl} alt="" />
              <div className="playTime flex-center">
                <svg className="icon icon-tabler icon-tabler-player-play" width="12" height="12" viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 4v16l13 -8z" />
                </svg>
                {transPlayCount(item.playTime)}
              </div>
              <div className="durationms">{dayjs(item.durationms).format('mm:ss')}</div>
            </Link>
          </div>
          <div className="content">
            <div className="title">
              <Link to={`./${item.vid}`}>
                {item.title}
              </Link>
            </div>
            <div className={classnames('ui_gray', 'username', 'text-overflow')}>
              by &nbsp;
              <Link to={`/user/${item.creator[0].userId}`}>
                {item.creator[0].userName}
              </Link>
            </div>
          </div>
        </div>
      ))
    }
  </div>
);
