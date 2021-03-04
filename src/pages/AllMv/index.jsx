import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { apiMVAll } from '@/api';
import './style.scss';
import classnames from 'classnames';

import DomGridVideo from '@/components/GridVideo';
import useInfinite from '@/custom/useInfinite';

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

  const limit = 30;
  const offset = useRef(0);

  const queryString = new URLSearchParams(search);
  const domScroll = useRef();
  const domObserver = useRef();
  for (const [k, v] of queryString) {
    defaultSearch[k] = v;
  }

  const [data, setData] = useState([]);

  const handleInit = async () => {
    try {
      const { data } = await apiMVAll({
        ...defaultSearch,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      setData((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    handleIo,
    handleUnIo,
  } = useInfinite(handleInit, domScroll, domObserver);

  useEffect(() => {
    // handleInit();
    handleIo();
    return () => {
      handleUnIo();
    };
  }, [search]);

  // useEffect(() => {
  //   handleInit();
  // }, [search]);

  return (
    <div className="domAllMV overflow-auto h-full px-8" ref={domScroll}>
      <div className="domAllMV_header">
        <Link to="./" className="h1 title">
          全部MV
        </Link>
      </div>
      <div className="domAllMV_main flex-auto">
        <div className="ui_filter">
          {
            filters.map((filter) => (
              <div className="row flex my-2.5" key={filter[1]}>
                <div className="name flex-none">
                  {filter[1]}
                  :
                </div>
                <div className="list divide-x">
                  {
                    filter[2].map((item) => (
                      <div className="item flex-center" key={item}>
                        <Link
                          to={`/allmv?${new URLSearchParams({ ...defaultSearch, ...{ [filter[0]]: item } })}`}
                          className={classnames('btn rounded-full leading-5 px-3 whitespace-nowrap', item === defaultSearch[filter[0]] ? 'bg-red-50 text-red-500' : 'ui_text_gray_hover')}
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
        <div className="py-1">
          <DomGridVideo list={data} type="mv" />
        </div>
        <div ref={domObserver} />
      </div>
    </div>
  );
};
