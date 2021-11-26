import React, { memo, useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { apiDjRadioHot } from "@/api";
import useInfinite from "@/hooks/useInfinite";
import Loading from "@/components/Loading";

const DJCategory = () => {
  const { type, rid } = useParams();
  const [data, setData] = useState([]);
  const DomScroll = useRef();
  const DomObserver = useRef();
  const offset = useRef(0);
  const limit = 40;

  const handleInit = async () => {
    try {
      const { djRadios } = await apiDjRadioHot({
        cateId: rid,
        limit,
        offset: offset.current,
      });
      offset.current += limit;
      setData((prev) => [...prev, ...djRadios]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setData([]);
    offset.current = 0;
    // handleInit();
  }, [rid]);
  useInfinite(handleInit, DomScroll, DomObserver);
  return (
    <div className="overflow-auto h-full" ref={DomScroll}>
      <div className="ui_header h1">{type}</div>
      <div className="grid grid-cols-2 gap-5 px-8">
        {data.map((item) => (
          <Link key={item.id} to={`/playlist/dj/${item.id}`} className="flex">
            <div className="w-32 rounded overflow-hidden border">
              <img
                loading={`lazy`}
                className={`ui_aspect-ratio-1/1`}
                src={`${item.picUrl}?param=200y200`}
                alt=""
              />
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
      <div ref={DomObserver} className="flex-center">
        <Loading />
      </div>
    </div>
  );
};

export default memo(DJCategory);
