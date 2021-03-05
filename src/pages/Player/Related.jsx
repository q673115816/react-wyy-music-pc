import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';
import { IconPlayerPlay } from '@tabler/icons';
import { playerTypes } from '@/common/config';

export default ({ related = [] }) => (
  <div className="right" style={{ width: 280 }}>
    <div className="domVideoDetail_header flex items-center text-base font-bold">相关推荐</div>
    <div className="domVideoDetail_related">
      {
      related.map((item) => (
        <div className="item mb-2.5 flex" key={item.vid}>
          <Link to={`/player/${playerTypes[item.type]}/${item.vid}`} className="cover relative flex-none rounded overflow-hidden">
            <img className="" src={item.coverUrl} alt="" />
            <div className="playTime absolute top-0 right-0 mx-2 my-1 flex-center text-white">
              <IconPlayerPlay size={12} />
              {transPlayCount(item.playTime)}
            </div>
            <div className="durationms absolute bottom-0 right-0 mx-2 my-1 text-white">
              {dayjs(item.durationms).format('mm:ss')}
            </div>
          </Link>
          <div className="content p-2 flex-auto w-0">
            <div className="title ui_ellipse">
              <Link to={`/player/${playerTypes[item.type]}/${item.vid}`} className="ui_text_black_hover">
                {item.title}
              </Link>
            </div>
            <div className="username mt-2 truncate text-gray-400">
              by&nbsp;
              <Link to={`/user/${item.creator[0].userId}`} className="ui_text_gray_hover">
                {item.creator[0].userName}
              </Link>
            </div>
          </div>
        </div>
      ))
    }
    </div>
  </div>
);
