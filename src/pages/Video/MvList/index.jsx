import React, { useEffect, useMemo, useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { apiMvFirst, apiMvAll, apiMvExclusiveRcmd } from '@/api';
import { transPlayCount } from '@/common/utils';

export default () => {
  console.log('mv');
  const [area] = useState('内地');
  const [mvFirst, setMvFirst] = useState([]);
  const [mvHot, setMvHot] = useState([]);
  const [mvWy, setMvWy] = useState([]);
  const handleInit = async () => {
    try {
      const [{ data: first }, { data: hot }, { data: wy }] = await Promise.all([
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
      ]);
      setMvFirst(first);
      setMvHot(hot);
      setMvWy(wy);
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
                  <Link to="/">
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
                  <Link to="/">
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
                <Link to="/">
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
  );
};
