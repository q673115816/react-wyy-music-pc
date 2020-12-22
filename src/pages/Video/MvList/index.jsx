import React, { useEffect, useMemo, useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import {
  apiMvFirst, apiMvAll, apiMvExclusiveRcmd, apiTopMv,
} from '@/api';
import { transPlayCount } from '@/common/utils';

const BuildLastRank = (lastRank, currentRank) => {
  if (lastRank < currentRank) {
    return (
      <svg className="icon icon-tabler icon-tabler-arrow-down" width="12" height="12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="18" y1="13" x2="12" y2="19" />
        <line x1="6" y1="13" x2="12" y2="19" />
      </svg>
    );
  }
  if (lastRank > currentRank) {
    return (
      <svg className="icon icon-tabler icon-tabler-arrow-up" width="12" height="12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="18" y1="11" x2="12" y2="5" />
        <line x1="6" y1="11" x2="12" y2="5" />
      </svg>
    );
  }
  return (
    <svg className="icon icon-tabler icon-tabler-minus" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
};

export default () => {
  console.log('mv');
  const [area] = useState('内地');
  const [mvFirst, setMvFirst] = useState([]);
  const [mvHot, setMvHot] = useState([]);
  const [mvWy, setMvWy] = useState([]);
  const [mvTop, setMvTop] = useState([]);
  const handleInit = async () => {
    try {
      const [
        { data: first },
        { data: hot },
        { data: wy },
        { data: top },
      ] = await Promise.all([
        apiMvFirst({
          area,
          limit: 6,
        }),
        apiMvAll({
          order: '最热',
          limit: 6,
        }),
        apiMvExclusiveRcmd({
          limit: 6,
        }),
        apiTopMv({
          area: '内地',
          limit: 10,
        }),
      ]);
      setMvFirst(first);
      setMvHot(hot);
      setMvWy(wy);
      setMvTop(top);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domplay_content overflow-auto">
      <div>
        <div className="dom">
          <Link to="/">最新MV</Link>
          <div />
        </div>
        <div className="ui_grid rectangle_width col_3">
          {mvFirst.map((item) => (
            <div className="item" key={item.id}>
              <div className="cover">
                <div className="inner">
                  <Link to={`/player/mv/${item.id}`}>
                    <img className="containimg" src={item.cover} alt="" />
                    <div className="rt whitetext">
                      {transPlayCount(item.playCount)}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="footer">
                {item.name}
              </div>
              <div className="text gray">
                {item.artistName}
              </div>
            </div>
          ))}
        </div>
        <div className="dom">
          <Link to="/">热播MV</Link>
          <div />
        </div>
        <div className="ui_grid rectangle_width col_3">
          {mvHot.map((item) => (
            <div className="item" key={item.id}>
              <div className="cover">
                <div className="inner">
                  <Link to={`/player/mv/${item.id}`}>
                    <img className="containimg" src={item.cover} alt="" />
                    <div className="rt whitetext">
                      {transPlayCount(item.playCount)}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="footer text-overflow">
                {item.name}
              </div>
              <div className="text gray">
                {item.artistName}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dom">
        <Link to="/">网易出品</Link>
        <div />
      </div>
      <div className="ui_grid rectangle_width col_3">
        {mvWy.map((item) => (
          <div className="item" key={item.id}>
            <div className="cover">
              <div className="inner">
                <Link to={`/player/mv/${item.id}`}>
                  <img className="containimg" src={item.cover} alt="" />
                  <div className="rt whitetext">
                    {transPlayCount(item.playCount)}
                  </div>
                </Link>
              </div>
            </div>
            <div className="footer text-overflow">
              {item.name}
            </div>
            <div className="text gray">
              {item.artistName}
            </div>
          </div>
        ))}
      </div>
      <div className="dom">
        <Link to="/">MV排行榜</Link>
        <div />
      </div>
      <div className="domVideoTop">
        {mvTop.map((item, index) => (
          <div className="item" key={item.id}>
            <div className="rank flex-center">
              <div className="num gray">
                {String(index + 1).padStart(2, 0)}
              </div>
              <div className="arrow">
                {BuildLastRank(item.lastRank, index + 1)}
              </div>
            </div>
            <div className="cover">
              <div className="inner">
                <Link to={`/player/mv/${item.id}`}>
                  <img className="containimg" src={item.cover} alt="" />
                  <div className="score">
                    {item.score}
                  </div>
                </Link>
              </div>
            </div>
            <div className="aside">
              <div className="name text-overflow">
                <Link to={`/player/mv/${item.id}`}>{item.name}</Link>
              </div>
              <div className="artists text-overflow">
                {
                  item.artists.map((artist) => (
                    <Link to={`/artist/${artist.id}`} className="gray">
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
