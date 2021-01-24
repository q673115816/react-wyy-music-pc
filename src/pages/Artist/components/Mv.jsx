import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { transPlayCount } from '@/common/utils';
import { apiArtistMv } from '@/api';

export default ({ id }) => {
  const [MVs, setMVs] = useState([]);
  const handleInit = async () => {
    try {
      const { mvs } = await apiArtistMv({
        id,
      });
      setMVs(mvs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domArtist_section">
      <div className="ui_grid col_3 rectangle_width">
        {MVs.map((item) => (
          <div className="item" key={item.id}>
            <div className="cover">
              <div className="inner">
                <Link to={`/player/mv/${item.id}`}>
                  <img src={item.imgurl} alt="" />
                  <div className="rt whitetext">{transPlayCount(item.playCount)}</div>
                  <div className="rb whitetext">{dayjs(item.duration).format('mm:ss')}</div>
                </Link>
              </div>
              { }
            </div>
            <div className="footer truncate">
              <Link to={`/player/mv/${item.id}`}>{item.name}</Link>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
