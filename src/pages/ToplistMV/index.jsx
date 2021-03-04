import React, { useEffect, useState } from 'react';
import { apiTopMV } from '@/api';
import DomGridMVToplist from '@/components/GridMVToplist';

import './style.scss';

const navs = [
  '内地',
  '港台',
  '欧美',
  '日本',
  '韩国',
];

export default () => {
  const [data, setData] = useState();
  const [area, setArea] = useState();
  const handleInit = async () => {
    try {
      const { data } = await apiTopMV({
        limit: 50,
      });
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="h-full overflow-auto px-8 py-5">
      <div className="header">
        <span className="ui_text_black_hover cursor-pointer h1">MV排行榜</span>
        <div className="flex py-4 items-center">
          <span className="text-gray-400 flex items-center">
            最近更新：
            {}
            <span className="border rounded-full w-4 h-4 flex-center">?</span>
          </span>
          <div className="ml-auto">
            {navs.map((item) => (
              <button type="button" className="ui_text_gray_hover" key={item}>{item}</button>
            ))}
          </div>
        </div>
      </div>
      <DomGridMVToplist list={data} />
    </div>
  );
};
