import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { limit } from '@/common/config';
import { apiArtistList } from '@/api';
import { addHomeTopArtists, initHomeTopArtists } from '@/redux/actions';

import options from './filter';

const Domitem = ({ item = {} }) => (
  <div className="item">
    <div className="img">
      <Link to={`/artist/detail/${item.id}`}>
        <LazyLoad overflow>
          <img
            className="containimg"
            src={`${item.img1v1Url}?param=200y200`}
            alt={item.name}
          />
        </LazyLoad>
      </Link>
    </div>
    <div className="info">
      <Link to={`/artist/detail/${item.id}`}>
        {item.name}
      </Link>
    </div>
  </div>
);

export default () => {
  const dispatch = useDispatch();
  const [isBottom, setIsBottom] = useState(false);
  const [option, setOption] = useState({
    type: -1,
    area: -1,
    initial: -1,
    offset: 0,
  });
  const [isPending, setIsPending] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const { artists } = useSelector(({ home }) => home.artist);

  const handleChangeOption = (newoption) => {
    dispatch(initHomeTopArtists());
    setOption({
      ...option,
      ...newoption,
      offset: 0,
    });
  };

  const handleScroll = ({ target }) => {
    const { scrollHeight, scrollTop, clientHeight } = target;
    if (scrollTop + clientHeight + 300 > scrollHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    setOption({
      ...option,
      offset: option.offset + limit,
    });
  }, [isBottom]);

  const handleGetList = async () => {
    if (isPending) return;
    try {
      setIsPending(true);
      const { artists, more } = await apiArtistList(option);
      setHasMore(more);
      dispatch(addHomeTopArtists(artists));
      setIsPending(false);
    } catch (error) {
      console.log(error);
      setIsPending(false);
    }
  };

  useEffect(() => {
    handleGetList();
  }, [option]);

  return (
    <div className="domHome_artist" onScroll={handleScroll}>
      <div className="domHome_artist_control">
        {options.map((filter, index) => (
          <div className="domHome_artist_filter" key={index}>
            <div className="title">{filter[1]}</div>
            <ul className="list">
              {filter[2].map((item) => (
                <li
                  className={['item', filter[0], option[filter[0]] === item[0] ? 'on' : ''].join(' ')}
                  key={item[0]}
                  onClick={() => handleChangeOption({ [filter[0]]: item[0] })}
                >
                  {item[1]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="domHome_artist_list">
        {option.type === -1 && option.initial === -1 && artists.length > 0 && (
        <div className="item">
          <div className="img">
            <Link to={`/toplistartist/${options[0][2].find((item) => item[0] === option.area)[2]}`}>
              <img
                className="containimg"
                src="http://p3.music.126.net/1tSJODTpcbZvNTCdsn4RYA==/109951165034950656.jpg?param=200y200"
                alt=""
                style={{ filter: 'blur(2)' }}
              />
              <div className="rankmask">
                歌手榜
              </div>
            </Link>
          </div>
          <div className="info">
            <Link to={`/toplistartist/${options[0][2].find((item) => item[0] === option.type)[2]}`}>
              歌手排行榜 &gt;
            </Link>
          </div>
        </div>
        )}
        {artists.map((item) => <Domitem item={item} key={item.id} />)}
      </div>
      {hasMore ? <div>加载中</div> : <div>已经到底了</div>}
    </div>
  );
};
