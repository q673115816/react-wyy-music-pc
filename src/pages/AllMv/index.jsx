import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link, useLocation } from 'react-router-dom';
import { transPlayCount } from '@/common/utils';
import { apiMvAll } from '@/api';
import './style.scss';
import classnames from 'classnames';

const filters = [
  ['area', '地区', ['全部', '内地', '港台', '欧美', '韩国', '日本']],
  ['type', '类型', ['全部', '官方版', '原声', '现场版', '网易出品']],
  ['order', '排序', ['上升最快', '最热', '最新']],
];

export default () => {
  const { search } = useLocation();

  const defaultSearch = {
    area: '全部',
    type: '全部',
    order: '上升最快',
  };

  const queryString = new URLSearchParams(search);

  for (const [k, v] of queryString) {
    defaultSearch[k] = v;
  }

  const [data, setData] = useState([]);

  const handleInit = async () => {
    try {
      const { data } = await apiMvAll(defaultSearch);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, [search]);

  return (
    <div className="domAllMv">
      <div className="domAllMv_header">
        <Link to="./" className="h1 title">
          全部MV
        </Link>
      </div>
      <div className="domAllMv_main overflow-auto max-h-full flex-auto">
        <div className="ui_filter">
          {
            filters.map((filter) => (
              <div className="row">
                <div className="name">
                  {filter[1]}
                  :
                </div>
                <div className="list">
                  {
                    filter[2].map((item) => (
                      <div className="item">
                        <Link
                          to={`/allmv?${new URLSearchParams({ ...defaultSearch, ...{ [filter[0]]: item } })}`}
                          className={classnames('btn', { on: item === defaultSearch[filter[0]] })}
                        >
                          {item}
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <div className="ui_grid rectangle_width col_3">
          {data.map((item) => (
            <div className="item" key={item.id}>
              <div className="cover">
                <div className="inner">
                  <Link to={`/player/mv/${item.id}`}>
                    <img className="ui_containimg" src={item.cover} alt="" />
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
    </div>
  );
};
