import React, { memo, useRef, useContext } from "react";
import DomDynamic from "@/components/Dynamic";
import useInfinite from "@/hooks/useInfinite";
import Loading from "@/components/Loading";
import { useParams } from "react-router-dom";
import { context } from "@/features/User/context";
import { useGetUserEventMutation } from "@/modules/services/user";
import { useImmer } from "use-immer";

const Dynamic = () => {
  const { uid = "" } = useParams();
  const [data, setData] = useImmer([]);
  const timing = useRef(-1);
  const { profile } = useContext(context);
  const [userEventGet, { isLoading }] = useGetUserEventMutation();
  const hasMore = useRef(true);
  const DomScroll = useRef(null);
  const DomObserver = useRef(null);

  const handleInit = async () => {
    if (!hasMore.current) return null;
    try {
      const { data } = await userEventGet({
        uid,
        lasttime: timing.current,
      });
      const { events, more, lasttime } = data;
      hasMore.current = more;
      timing.current = lasttime;
      setData((draft) => {
        draft.push(...events);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useInfinite(handleInit, DomScroll, DomObserver);

  return (
    <div className="h-full overflow-auto" ref={DomScroll}>
      <div className="h1 ui_header">{`${profile.nickname}的动态`}</div>
      <div className="px-8">
        {data.length > 0 ? (
          <DomDynamic list={data} />
        ) : (
          <div className="empty">暂无动态</div>
        )}
      </div>
      <div ref={DomObserver}>{hasMore.current && <Loading />}</div>
    </div>
  );
};

export default memo(Dynamic);
