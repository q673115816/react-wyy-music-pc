import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { apiAlbumSublist } from '@/api';
import useInit from './useInit';
import Search from './components/Search';

export default () => {
  const { push } = useHistory();
  const {
    count,
    setSearch,
    search,
    filter,
  } = useInit(apiAlbumSublist);
  return (
    <>
      <div className="domSublist_headerBar">
        <span className="title">
          <b>收藏的专辑</b>
          &nbsp;
          (
          {count}
          )
        </span>
        <Search {...{ search, setSearch, placeholder: '搜索收藏专辑' }} />
      </div>
      <div className="domSublist_list">
        {filter.map((item) => (
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
        ))}
      </div>
    </>
  );
};
