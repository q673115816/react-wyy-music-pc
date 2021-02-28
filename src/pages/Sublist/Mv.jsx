import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { apiMvSublist } from '@/api';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';
import Search from '@/components/HeaderBarSearch';
import useInit from './useInit';
import Empty from './components/Empty';

const NAME = '视频';

const ListBuild = (filter, search) => {
  if (search && filter.length === 0) {
    return (
      <Empty>
        未能找到与“
        {search}
        ”相关的任何
        {NAME}
      </Empty>
    );
  }
  if (filter.length > 0) {
    return (
      <div className="grid grid-cols-3 gap-5">
        {filter.map((item) => (
          <div className="item" key={item.vid}>
            <div className="cover relative rounded overflow-hidden">
              <Link to={`/player/video/${item.vid}`}>
                <img className="" src={item.coverUrl} alt="" />
                <div className="absolute top-0 right-0 my-1 mx-2 text-white">
                  {transPlayCount(item.playTime)}
                </div>
                <div className="absolute bottom-0 right-0 my-1 mx-2 text-white">
                  {dayjs(item.durationms).format('mm:ss')}
                </div>
              </Link>
            </div>
            <div className="footer truncate text-sm mt-1">
              <Link
                to={`/player/video/${item.vid}`}
                className=""
              >
                {item.title}
              </Link>
            </div>
            <div className="text creator text-gray-300">
              by &nbsp;
              <Link
                to={`/user/${item.creator[0].userId}`}
                className="hover:text-gray-500"
              >
                {item.creator[0].userName}
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <Empty>
      暂无收藏
      {NAME}
    </Empty>
  );
};

const filterRule = (data, search) => data
  .filter((item) => item.title.indexOf(search) >= 0
  || item.creator.find((creator) => creator.userName.indexOf(search) >= 0));

export default () => {
  const {
    count,
    setSearch,
    search,
    filter,
  } = useInit(apiMvSublist, filterRule);
  return (
    <>
      <div className="ui_headerBar">
        <span className="title">
          <b>收藏的视频</b>
          &nbsp;
          (
          {count}
          )
        </span>
        <div className="right">
          <Search {...{ search, setSearch, placeholder: '搜索我收藏的视频' }} />
        </div>
      </div>
      <div className="domSublist_grid">
        {ListBuild(filter, search)}
      </div>
    </>
  );
};
