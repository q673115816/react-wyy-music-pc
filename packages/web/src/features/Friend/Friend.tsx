import React, { memo, useEffect, useRef } from "react";
import { IconEdit } from "@tabler/icons";
import useInfinite from "@/hooks/useInfinite";
import Loading from "@/components/Loading";
import Dynamic from "@/components/Dynamic";
import Aside from "./components/Aside";
import { useGetEventMutation } from "@/modules/services/friend";
import { useImmer } from "use-immer";

const getArticleFromJson = (json: string) => {
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

const Friend = () => {
  const [event, setEvent] = useImmer([]);
  const [eventGet] = useGetEventMutation();
  const DomScroll = useRef(null);
  const DomObserver = useRef(null);
  const refLasttime = useRef(-1);
  const handleInitEvent = async () => {
    try {
      const data = await eventGet({
        lasttime: refLasttime.current,
      });
      const lasttime = data.data.lasttime;
      const event = data.data.event;
      refLasttime.current = lasttime;
      // dispatch(setFriendEventAdd({ event }));
      setEvent((draft) => {
        draft.push(...event);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setEvent([]);
  }, []);
  useInfinite(handleInitEvent, DomScroll, DomObserver);

  return (
    <div className="h-full overflow-auto" ref={DomScroll}>
      <div className="flex divide-x min-h-full">
        <div className="relative flex-1 w-0">
          <div className="h-14 px-8 flex items-center sticky top-0 z-10 bg-white">
            <span className="h1">动态</span>
            <button
              type="button"
              className="flex-center ml-4 ui_theme_bg_color text-sm text-white h-8 px-4 rounded-full"
            >
              <IconEdit size={20} stroke={1} />
              发动态
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
};

export default memo(Friend);
