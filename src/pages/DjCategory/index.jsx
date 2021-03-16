import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { apiDjRadioHot } from '@/api';

export default () => {
  const { rid } = useParams();
  const [data, setData] = useState([]);
  const handleInit = async () => {
    try {
      const { djRadios } = await apiDjRadioHot({
        cateId: rid,
        limit: 40,
      });
      setData(djRadios);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, [rid]);
  return (
    <div className="overflow-auto h-full p-8">
      <div className="h1">{}</div>
      <div className="grid grid-cols-2 gap-5">
        {data.map((item) => (
          <Link to={`/playlist/dj/${item.id}`} className="flex">
            <div className="w-32 rounded overflow-hidden border">
              <img src={`${item.picUrl}?param=200y200`} alt="" />
            </div>
            <div className="flex-auto w-0 px-2 pt-8">
              <div className="ui_text_black_hover text-sm">{item.name}</div>
              <div className="text-gray-400 mt-4">{item.rcmdtext}</div>
              <div className="text-gray-400 mt-2">
                节目：
                <span>{item.programCount}</span>
                ，订阅：
                <span>{item.subCount}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
