import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';
import { IconPlayerPlay } from '@tabler/icons';

export default ({ related = [] }) => (
  <div className="domVideoDetail_related">
    {
      related.map((item) => (
        <div className="item" key={item.vid}>
          <div className="cover">
            <Link to={`./${item.vid}`}>
              <img className="ui_containimg" src={item.coverUrl} alt="" />
              <div className="playTime flex-center">
                <IconPlayerPlay size={12} />
                {transPlayCount(item.playTime)}
              </div>
              <div className="durationms">
                {dayjs(item.durationms).format('mm:ss')}
              </div>
            </Link>
          </div>
          <div className="content">
            <div className="title">
              <Link to={`./${item.vid}`}>
                {item.title}
              </Link>
            </div>
            <div className={classnames('text-gray-400', 'username', 'truncate')}>
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
