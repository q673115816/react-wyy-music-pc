import React, { useEffect, useState } from 'react';
import { apiDjSublist } from '@/api';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

export default () => {
  const { profile } = useSelector(({ account }) => account);
  const { push } = useHistory();
  const [data, setData] = useState([]);
  const handleInit = async () => {
    try {
      const { djRadios } = await apiDjSublist();
      setData(djRadios);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="overflow-auto max-h-full flex-auto">
      <div className="domSublist_nav">
        <span className="h1">我的电台</span>
      </div>
      <div className="domSublist_headerBar ui_headerBar">
        <b className="title">我订阅的电台</b>
        &nbsp;
        <span className="text-gray-400">
          (
          {data.length}
          )
        </span>
      </div>
      <div className="domSublist_list">
        {data.map((item) => (
          <Link to={`/djlist/${item.id}`} key={item.id} className="item">
            <div className="cover">
              <img className="ui_containimg" src={item.picUrl} alt="" />
            </div>
            <div className="name truncate">
              {item.name}
            </div>
            <div className="creator text-gray-400">
              by&nbsp;
              <Link to={`/user/${item.dj.userId}`} className="text-gray-400 hover">
                {item.dj.nickname}
              </Link>
            </div>
            <div className="size text-gray-400">
              节目
              {item.programCount}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
