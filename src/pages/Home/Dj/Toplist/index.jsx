import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { apiDjProgramToplist, apiDjToplist } from '@/api';
import './style.scss';

export default () => {
  const [focus, setFocus] = useState();
  const [data, setData] = useState([]);
  const [updateTime, setUpdateTime] = useState();
  const handleInit = async () => {
    try {
      const { toplist, updateTime } = await apiDjProgramToplist();
      setData(toplist);
      setUpdateTime(updateTime);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e, item) => {
    setFocus(item.program.id);
  };

  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domHome_dj_toplist h-full overflow-auto">
      <div className="domHome_dj_toplist_header flex py-7">
        <div className="domHome_dj_toplist_nav h-full flex rounded-full overflow-hidden border">
          <NavLink
            to="/home/dj/toplist"
            exact
            activeClassName="on text-white"
            className="domHome_dj_toplist_nav_link rounded-full text-center hover:bg-gray-100"
          >
            节目榜
          </NavLink>
          <NavLink
            to="/home/dj/toplist/now"
            activeClassName="on text-white"
            className="domHome_dj_toplist_nav_link rounded-full text-center hover:bg-gray-100"
          >
            新晋电台榜
          </NavLink>
          <NavLink
            to="/home/dj/toplist/hot"
            activeClassName="on text-white"
            className="domHome_dj_toplist_nav_link rounded-full text-center hover:bg-gray-100"
          >
            热门电台榜
          </NavLink>
        </div>
        <div className="ml-auto text-gray-400">
          最近更新：
          {updateTime && dayjs(updateTime).format('MM月DD日')}
        </div>
      </div>
      <div className="domHome_dj_toplist_main">
        <div className="list">
          {
            data.map((item, index) => (
              <div
                onMouseDown={(e) => handleClick(e, item)}
                className={classnames('item flex items-center', { on: item.program.id === focus })}
                key={item.program.id}
              >
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
                <div className="name flex-auto truncate">{item.program.name}</div>
                <div className="radio flex-auto truncate">
                  <Link
                    className="text-gray-500 hover:text-gray-800"
                    to={`/playlist/dj/${item.program.id}`}
                  >
                    {item.program.radio.name}
                  </Link>
                </div>
                <div className="category">
                  <Link to="/" className="text-gray-300 hover:text-gray-800 border border-current">
                    {item.program.radio.category}
                  </Link>
                </div>
                <div className="score">
                  <span className="">
                    {item.score}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
