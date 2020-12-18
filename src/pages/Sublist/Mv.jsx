import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { apiMvSublist } from '@/api';
import useInit from './useInit';
import Search from './components/Search';
import Empty from './components/Empty';

const ListBuild = (filter, search, push) => {
  if (search && filter.length === 0) {
    return (
      <Empty>
        未能找到与“
        {search}
        ”相关的任何视频
      </Empty>
    );
  } if (filter.length > 0) {
    return filter.map((item) => (
      <button type="button" className="item" key={item.id} onClick={() => push(`/playlist/${item.id}`)}>
        <div className="cover">
          <Link to={`/playlist/${item.id}`}>
            <img className="containimg" src={`${item.picUrl}?param=100y100`} alt="" />
          </Link>
        </div>
        <div className="name text-overflow">
          <Link to={`/playlist/${item.id}`}>
            {item.name}
          </Link>
          <span className="gray">
            {item.alias.map((alia) => alia)}
          </span>
        </div>
        <div className="artist">
          {item.artists.map((artist) => (
            <Link onClick={(e) => e.stopPropagation()} to={`/artist/${artist.id}`} className="gray hover">
              {artist.name}
            </Link>
          ))}
        </div>
        <div className="size gray">
          {item.size}
          首
        </div>
      </button>
    ));
  }
  return <Empty>暂无收藏视频</Empty>;
};

export default () => {
  const { push } = useHistory();
  const {
    count,
    setSearch,
    search,
    filter,
  } = useInit(apiMvSublist);
  return (
    <>
      <div className="domSublist_headerBar">
        <span className="title">
          <b>收藏的视频</b>
          &nbsp;
          {
            count > 0
          && (
            { count }
          )
          }

        </span>
        <Search {...{ search, setSearch, placeholder: '搜索我收藏的视频' }} />
      </div>
      <div className="domSublist_list">
        {ListBuild(filter, search, push)}
      </div>
    </>
  );
};
