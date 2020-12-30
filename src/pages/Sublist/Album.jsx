import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { apiAlbumSublist } from '@/api';
import Search from '@/components/HeaderBarSearch';
import useInit from './useInit';
import Empty from './components/Empty';
import ListItem from './components/Listitem';

const NAME = '专辑';

const ListBuild = (filter, search, push) => {
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
    return filter.map((item) => (
      <div
        role="button"
        className="item"
        key={item.id}
        onClick={() => push(`/playlist/album/${item.id}`)}
      >
        <div className="cover">
          <Link to={`/playlist/album/${item.id}`}>
            <img className="ui_containimg" src={`${item.picUrl}?param=100y100`} alt="" />
          </Link>
        </div>
        <div className="name text-overflow">
          <Link to={`/playlist/album/${item.id}`}>
            {item.name}
          </Link>
          <span className="gray">
            {item.alias.map((alia) => alia)}
          </span>
        </div>
        <div className="creator">
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
      </div>
    ));
  }
  return (
    <Empty>
      暂无收藏
      {NAME}
    </Empty>
  );
};

const filterRule = (data, search) => data.filter((item) => item.name.indexOf(search) >= 0
    || item.artists.find((artist) => artist.name.indexOf(search) >= 0));

export default () => {
  const { push } = useHistory();
  const {
    count,
    setSearch,
    search,
    filter,
  } = useInit(apiAlbumSublist, filterRule);
  return (
    <>
      <div className="ui_headerBar">
        <span className="title">
          <b>收藏的专辑</b>
          &nbsp;
          (
          {count}
          )
        </span>
        <div className="right">
          <Search {...{ search, setSearch, placeholder: '搜索收藏专辑' }} />
        </div>
      </div>
      <div className="domSublist_list">
        {ListBuild(filter, search, push)}
      </div>
    </>
  );
};
