import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { apiDjProgramToplist } from '@/api';
import './style.scss';

export default () => {
  const [focus, setFocus] = useState();
  const [data, setData] = useState([]);
  const handleInit = async () => {
    try {
      const { toplist } = await apiDjProgramToplist();
      setData(toplist);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domHome_dj_toplist h-full overflow-auto">
      <div className="domHome_dj_toplist_header">{ }</div>
      <div className="domHome_dj_toplist_main">
        <div className="list">
          {
            data.map((item, index) => (
              <div className="item flex items-center" key={item.rank}>
                <div className="index flex flex-col items-center justify-center">
                  <div className={classnames('font-bold text-sm', {
                    'text-red-500': index < 3,
                    'text-gray-400': index > 2,
                  })}
                  >
                    {index + 1}
                  </div>
                </div>
                <div className="cover">
                  <img src={item.program.coverUrl} alt="" />
                </div>
                <div className="name">{item.program.name}</div>
                <div className="radio">
                  <Link className="text-gray-500 hover:text-gray-800" to={`/playlist/dj/${item.program.id}`}>
                    {item.program.radio.name}
                  </Link>
                </div>
                <div className="category">{item.program.radio.category}</div>
                <div className="score">{item.score}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
