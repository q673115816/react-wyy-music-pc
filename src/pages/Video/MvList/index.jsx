import React, {
  useEffect, useMemo, useState, useRef,
} from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { IconArrowDown, IconArrowUp, IconMinus } from '@tabler/icons';
import {
  apiMvFirst,
  apiMvAll,
  apiMvExclusiveRcmd,
  apiTopMv,
} from '@/api';
import { transPlayCount } from '@/common/utils';

const BuildLastRank = (lastRank, currentRank) => {
  if (lastRank < currentRank) {
    return <IconArrowDown size={8} />;
  }
  if (lastRank > currentRank) {
    return <span className="ui_red"><IconArrowUp size={8} /></span>;
  }
  return <IconMinus size={8} />;
};

const category = [
  '内地',
  '港台',
  '欧美',
  '日本',
  '韩国',
];

export default () => {
  const [firstArea, setFirstArea] = useState('内地');
  const [topArea, setTopArea] = useState('内地');
  const [mvFirst, setMvFirst] = useState([]);
  const [mvHot, setMvHot] = useState([]);
  const [mvWy, setMvWy] = useState([]);
  const [mvTop, setMvTop] = useState([]);
  const handleInit = async () => {
    try {
      const [
        { data: hot },
        { data: wy },
      ] = await Promise.all([
        apiMvAll({
          order: '最热',
          limit: 6,
        }),
        apiMvExclusiveRcmd({
          limit: 6,
        }),
      ]);
      setMvHot(hot);
      setMvWy(wy);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetFirstArea = async () => {
    try {
      const { data: first } = await apiMvFirst({
        area: firstArea,
        limit: 6,
      });
      setMvFirst(first);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetTopArea = async () => {
    try {
      const { data: top } = await apiTopMv({
        area: topArea,
        limit: 10,
      });
      setMvTop(top);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);

  useEffect(() => {
    handleGetFirstArea();
  }, [firstArea]);

  useEffect(() => {
    handleGetTopArea();
  }, [topArea]);
  return (
    <div className="domVideoList_content overflow-auto max-h-full flex-auto">

      <div className="domMvList_sublist">
        <div className="domMvList_header">
          <Link
            to={`/allmv?order=最新&area=${firstArea}`}
            className="domMvList_subLink"
          >
            最新MV &gt;

          </Link>
          <div className="ui_recommend_nav">
            {
              category.map((item) => (
                <div className="ui_recommend_nav_item" key={item}>
                  <button
                    onClick={() => setFirstArea(item)}
                    type="button"
                    className={classnames('ui_recommend_nav_link', { on: firstArea === item })}
                  >
                    {item}

                  </button>
                </div>
              ))
            }
          </div>
        </div>
        <div className="ui_grid rectangle_width col_3">
          {mvFirst.map((item) => (
            <div className="item" key={item.id}>
              <div className="cover">
                <div className="inner">
                  <Link to={`/player/mv/${item.id}`}>
                    <img className="ui_coverimg" src={item.cover} alt="" />
                    <div className="rt whitetext">
                      {transPlayCount(item.playCount)}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="footer">
                {item.name}
              </div>
              <div className="text ui_gray">
                {item.artistName}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="domMvList_sublist">
        <div className="domMvList_header">
          <Link
            to="/allmv?order=最热"
            className="domMvList_subLink"
          >
            热播MV &gt;

          </Link>
        </div>
        <div className="ui_grid rectangle_width col_3">
          {mvHot.map((item) => (
            <div className="item" key={item.id}>
              <div className="cover">
                <div className="inner">
                  <Link to={`/player/mv/${item.id}`}>
                    <img className="ui_coverimg" src={item.cover} alt="" />
                    <div className="rt whitetext">
                      {transPlayCount(item.playCount)}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="footer truncate">
                {item.name}
              </div>
              <div className="text ui_gray">
                {item.artistName}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="domMvList_sublist">
        <div className="domMvList_header">
          <Link
            to="/allmv?type=网易出品&order=最新"
            className="domMvList_subLink"
          >
            网易出品 &gt;

          </Link>
        </div>
        <div className="ui_grid rectangle_width col_3">
          {mvWy.map((item) => (
            <div className="item" key={item.id}>
              <div className="cover">
                <div className="inner">
                  <Link to={`/player/mv/${item.id}`}>
                    <img className="ui_coverimg" src={item.cover} alt="" />
                    <div className="rt whitetext">
                      {transPlayCount(item.playCount)}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="footer truncate">
                {item.name}
              </div>
              <div className="text ui_gray">
                {item.artistName}
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="domMvList_header">
        <Link to="/allmv/" className="domMvList_subLink">MV排行榜 &gt;</Link>
        <div className="ui_recommend_nav">
          {
            category.map((item) => (
              <div className="ui_recommend_nav_item" key={item}>
                <button
                  onClick={() => setTopArea(item)}
                  type="button"
                  className={classnames('ui_recommend_nav_link', { on: topArea === item })}
                >
                  {item}
                </button>
              </div>
            ))
          }
        </div>
      </div>
      <div className="domVideoTop">
        {mvTop.map((item, index) => (
          <div className="item" key={item.id}>
            <div className="rank flex-center">
              <div className="num ui_gray">
                {String(index + 1).padStart(2, 0)}
              </div>
              <div className="arrow">
                {BuildLastRank(item.lastRank, index + 1)}
              </div>
            </div>
            <div className="cover">
              <div className="inner">
                <Link to={`/player/mv/${item.id}`}>
                  <img className="ui_coverimg" src={item.cover} alt="" />
                  <div className="score">
                    {item.score}
                  </div>
                </Link>
              </div>
            </div>
            <div className="aside">
              <div className="name truncate">
                <Link to={`/player/mv/${item.id}`}>{item.name}</Link>
              </div>
              <div className="artists truncate">
                {
                  item.artists.map((artist) => (
                    <Link to={`/artist/${artist.id}`} key={artist.id} className="ui_gray">
                      {artist.name}
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
