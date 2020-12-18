import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { apiArtistSublist } from '@/api';
import useInit from './useInit';
import Search from './components/Search';

const AliasOrTrans = ({ alias, trans }) => {
  if (alias.length) {
    return (
      <span className="gray">
        (
        {alias.map((alia) => alia)}
        )
      </span>
    );
  } if (trans) {
    return (
      <span className="gray">
        (
        {trans}
        )
      </span>
    );
  }
};

export default () => {
  const { push } = useHistory();
  const {
    count,
    setSearch,
    search,
    filter,
  } = useInit(apiArtistSublist);
  return (
    <>
      <div className="domSublist_headerBar">
        <span className="title">
          <b>收藏的歌手</b>
          &nbsp;
          (
          {count}
          )
        </span>
        <Search {...{ search, setSearch, placeholder: '搜索我收藏的歌手' }} />
      </div>
      <div className="domSublist_list">
        {filter.map((item) => (
          <button type="button" className="item" key={item.id} onClick={() => push(`/artist/${item.id}`)}>
            <div className="cover">
              <img className="containimg" src={`${item.picUrl}?param=100y100`} alt="" />
            </div>
            <div className="name text-overflow">
              {item.name}
              &nbsp;
              {AliasOrTrans(item)}
            </div>
            <div className="albumSize gray">
              专辑：
              {item.albumSize}
            </div>
            <div className="size gray">
              MV：
              {item.mvSize}

            </div>
          </button>
        ))}
      </div>
    </>
  );
};
