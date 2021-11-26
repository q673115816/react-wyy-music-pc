import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { apiTopicDetail, apiTopicDetailEventHot, apiHotTopic } from "@/api";
import useInfinite from "@/hooks/useInfinite";
import Dynamic from "@/components/Dynamic";
import { IconShare, IconPencil } from "@tabler/icons";
import TopicList from "./components/TopicList";
import { useParams } from "react-router-dom";

export default memo(function Topic() {
  const { id } = useParams();
  console.log(id);
  const [state, setState] = useState({});
  const [detail, setDetail] = useState({});
  const [hot, setHot] = useState([]);
  const [data, setData] = useState([]);
  const DomScroll = useRef(null);
  const DomObserver = useRef(null);

  const handleInitHot = async () => {
    try {
      const { act } = await apiTopicDetail({
        actid: id,
      });
      const { hot } = await apiHotTopic({
        limit: 10,
      });
      setDetail(act);
      setHot(hot);
    } catch (error) {
      console.log(error);
    }
  };
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
  useEffect(() => {
    setData([]);
    handleInitHot();
  }, [id]);
  return (
    <div className="domFriend h-full overflow-auto" ref={DomScroll}>
      <div className="flex divide-x">
        <div className="domFriend_left flex-auto w-0">
          <div className="px-8 pt-4">
            <div className="border-b">
              <div className="rounded overflow-hidden border relative">
                <img
                  src={detail.coverPCUrl}
                  loading={"lazy"}
                  className={`h-56 object-cover block`}
                  alt=""
                />
                <div
                  className={`absolute inset-0 bg-black bg-opacity-20 flex-center flex-col`}
                >
                  <div
                    style={{ minWidth: 210 }}
                    className="relative max-w-sm min-w- border-t border-b border-white border-opacity-60 py-6 text-white text-xl flex-center text-center flex-col "
                  >
                    <div className={`flex`}>
                      #<span className="truncate">{detail.title}</span>#
                    </div>
                    <span className="absolute inset-x-0 text-xs whitespace-nowrap top-full transform -translate-y-1/2">
                      {`${detail.participateCount}人参与`}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="bg-white flex-center h-9 mt-4 w-52 rounded text-red-500 bg-opacity-90 hover:bg-opacity-100"
                  >
                    <IconPencil size={16} />
                    立即参与
                  </button>
                </div>
                <button
                  type="button"
                  className="absolute m-4 w-8 h-8 flex-center top-0 right-0 border text-white border-current rounded-full bg-black bg-opacity-50"
                >
                  <IconShare size={24} stroke={1} />
                </button>
              </div>
              <ul className="pb-8 text-sm text-gray-500 leading-6">
                {detail.text?.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
            <Dynamic list={data} />
            <div ref={DomObserver} />
          </div>
        </div>
        <div className="domFriend_right flex-none" style={{ width: 230 }}>
          <div className="p-4 text-sm text-gray-700">推荐话题</div>
          <TopicList list={hot} />
        </div>
      </div>
    </div>
  );
});
