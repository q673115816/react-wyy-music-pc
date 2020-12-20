import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { apiMvSublist } from '@/api';
import dayjs from 'dayjs';
import { transPlayCount } from '@/common/utils';
import useInit from './useInit';
import Search from './components/Search';
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
  } if (filter.length > 0) {
    return (
      <div className="ui_grid col_3 rectangle_width">
        {filter.map((item) => (
          <div className="item" key={item.vid}>
            <div className="cover">
              <div className="inner">
                <Link to={`/videodetail/${item.vid}`}>
                  <img className="ui_coverimg" src={item.coverUrl} alt="" />
                  <div className="rt whitetext">{transPlayCount(item.playTime)}</div>
                  <div className="rb whitetext">{dayjs(item.durationms).format('mm:ss')}</div>
                </Link>
              </div>
            </div>
            <div className="footer text-overflow">
              <Link to={`/videodetail/${item.vid}`} className="">{item.title}</Link>
            </div>
            <div className="text creator gray">
              by &nbsp;
              <Link to={`/user/${item.creator[0].userId}`}>
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
  .filter((item) => item.title.indexOf(search) >= 0 || item.creator.find((creator) => creator.userName.indexOf(search) >= 0));

export default () => {
  const { push } = useHistory();
  const {
    count,
    setSearch,
    search,
    filter,
  } = useInit(apiMvSublist, filterRule);
  return (
    <>
      <div className="domSublist_headerBar">
        <span className="title">
          <b>收藏的视频</b>
          &nbsp;
          (
          { count }
          )
        </span>
        <Search {...{ search, setSearch, placeholder: '搜索我收藏的视频' }} />
      </div>
      <div className="domSublist_grid">
        {ListBuild(filter, search, push)}

      </div>
    </>
  );
};
