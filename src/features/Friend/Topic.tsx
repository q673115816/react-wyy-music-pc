import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { apiTopicDetailEventHot } from "@/api";
import useInfinite from "@/hooks/useInfinite";
import Dynamic from "@/components/Dynamic";
import TopicList from "./components/TopicList";
import { useParams } from "react-router-dom";
import Detail from "./components/Detail";

export default memo(function Topic() {
  const { id } = useParams();
  console.log(id);
  const [state, setState] = useState({});
  const [data, setData] = useState([]);
  const DomScroll = useRef(null);
  const DomObserver = useRef(null);

  const handleInitEvent = useCallback(async () => {
    console.log("handleInitEvent");
    try {
      const { events } = await apiTopicDetailEventHot({
        actid: id,
      });
      setData(events);
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  useInfinite(handleInitEvent, DomScroll, DomObserver);

  return (
    <div className="h-full overflow-auto" ref={DomScroll}>
      <div className="flex divide-x">
        <div className="flex-auto w-0">
          <div className="px-8 pt-4">
            <Detail />
            <Dynamic list={data} />
            <div ref={DomObserver} />
          </div>
        </div>
        <div className="flex-none" style={{ width: 230 }}>
          <div className="p-4 text-sm text-gray-700">推荐话题</div>
          <TopicList limit={10} />
        </div>
      </div>
    </div>
  );
});
