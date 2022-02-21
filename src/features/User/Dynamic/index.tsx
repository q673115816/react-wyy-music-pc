import React, { useEffect, useState, memo, useRef } from "react";
import { apiUserEvent, apiUserDetail } from "@/api";
import DomDynamic from "@/components/Dynamic";
import useInfinite from "@/hooks/useInfinite";
import Loading from "@/components/Loading";
import { useParams } from "react-router-dom";

export default memo(() => {
  const { uid } = useParams();
  const [data, setData] = useState([]);
  const timing = useRef(-1);
  const [profile, setProfile] = useState({});
  const hasMore = useRef(true);
  const DomScroll = useRef(null);
  const DomObserver = useRef(null);

  const handlePrevInit = async () => {
    try {
      const { profile } = await apiUserDetail({
        uid,
      });
      setProfile(profile);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInit = async () => {
    if (!hasMore.current) return null;
    try {
      const { events, more, lasttime } = await apiUserEvent({
        uid,
        lasttime: timing.current,
      });
      hasMore.current = more;
      timing.current = lasttime;
      setData((prev) => [...prev, ...events]);
    } catch (error) {
      console.log(error);
    }
  };
  useInfinite(handleInit, DomScroll, DomObserver);
  useEffect(() => {
    if (data.length > 0) {
      setData([]);
    }
    handlePrevInit();
  }, [uid]);
  return (
    <div className="h-full overflow-auto" ref={DomScroll}>
      <div className="h1 domUser_subpage_header ui_header">
        {`${profile.nickname}的动态`}
      </div>
      <div className="domUser_dynamic_main">
        <div className="list px-8">
          {data.length > 0 ? (
            <DomDynamic list={data} />
          ) : (
            <div className="empty">暂无动态</div>
          )}
        </div>
        <div ref={DomObserver} />
        {hasMore.current && (
          <div className="flex-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
});
