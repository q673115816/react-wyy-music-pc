import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { apiArtistSublist } from '@/api';
import Search from '@/components/HeaderBarSearch';
import useInit from './useInit';

const AliasOrTrans = ({ alias, trans }) => {
  if (alias.length) {
    return (
      <span className="ui_gray">
        (
        {alias[0]}
        )
      </span>
    );
  } if (trans) {
    return (
      <span className="ui_gray">
        (
        {trans}
        )
      </span>
    );
  }
};

const filterRule = (data, search) => data.filter((item) => item.name.indexOf(search) >= 0
  || item?.trans?.indexOf(search) >= 0 || item.alias.find((alia) => alia.indexOf(search) >= 0));

export default () => {
  const { push } = useHistory();
  const {
    count,
    setSearch,
    search,
    filter,
  } = useInit(apiArtistSublist, filterRule);
  return (
    <>
      <div className="ui_headerBar">
        <span className="title">
          <b>收藏的歌手</b>
          &nbsp;
          (
          {count}
          )
        </span>
        <div className="right">
          <Search {...{ search, setSearch, placeholder: '搜索我收藏的歌手' }} />
        </div>
      </div>
      <div className="domSublist_list">
        {filter.map((item) => (
          <Link to={`/artist/${item.id}`} className="item" key={item.id}>
            <div className="cover">
              <img className="ui_containimg" src={`${item.picUrl}?param=100y100`} alt="" />
            </div>
            <div className="name truncate">
              {item.name}
              &nbsp;
              {AliasOrTrans(item)}
            </div>
            <div className="creator ui_gray">
              专辑：
              {item.albumSize}
            </div>
            <div className="size ui_gray">
              MV：
              {item.mvSize}

            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
