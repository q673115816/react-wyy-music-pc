import React, { memo, useEffect, useRef, useState } from "react";
import { apiEvent } from "@/api";

import { IconPlus } from "@tabler/icons";

import useInfinite from "@/hooks/useInfinite";
import Loading from "@/components/Loading";
import Dynamic from "@/components/Dynamic";
import Aside from "./components/Aside";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";

const getArticleFromJson = (json) => {
  const obj = JSON.parse(json);
  return (
    <>
      <div className="song">
        <div className="cover">
          <img src={obj.img80x80} alt="" />
        </div>
        <div className="">{obj.song.name}</div>
      </div>
    </>
  );
};

export default memo(function Friend() {
  const [event, setEvent] = useState([]);

  const DomScroll = useRef(null);
  const DomObserver = useRef(null);
  const refLasttime = useRef(-1);
  const handleInitEvent = async () => {
    try {
      const { event = [], lasttime = -1 } = await apiEvent({
        lasttime: refLasttime.current,
      });
      refLasttime.current = lasttime;
      // dispatch(setFriendEventAdd({ event }));
      setEvent((prev) => [...prev, ...event]);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleInit = async () => {
  //   await handleInitHot()
  //   await handleInitEvent()
  // };

  useEffect(() => {
    setEvent([]);
  }, []);
  useInfinite(handleInitEvent, DomScroll, DomObserver);

  return (
    <div className="h-full overflow-auto" ref={DomScroll}>
      <div className="flex divide-x min-h-full">
        <div className="relative flex-auto">
          <div className="h-14 px-8 flex items-center sticky top-0 z-10 bg-white">
            <span className="h1">动态</span>
            <button
              type="button"
              className="flex ml-auto items-center ui_theme_bg_color text-white h-6 px-3 rounded-full"
            >
              <IconPlus size={12} stroke={5} />
              写动态
            </button>
          </div>
          <div className="domFriend_content">
            <div className="px-8">
              <Dynamic list={event} />
            </div>
            <div className="flex-center" ref={DomObserver}>
              {event.length === 0 ? (
                <div className="empty text-center text-gray-400 pt-48">
                  暂无动态
                </div>
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>

        <Aside />
      </div>
    </div>
  );
});
