import React, { memo, useCallback, useEffect, useState } from "react";
import { IconEdit } from "@tabler/icons";
import Loading from "@/components/Loading";
import Dynamic from "@/components/Dynamic";
import Aside from "../components/Aside";
import List from "./List";
import { useAppSelector } from "@/modules/hooks";
import { accountSelector } from "@/modules/reducers/account/slice";

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
  const [event, setEvent] = useState<number[]>([0]);
  const { isLogin } = useAppSelector(accountSelector);
  const setLasttime = useCallback((lasttime: number) => {
    setEvent((prev) => [...prev, lasttime]);
  }, []);
  return (
    <div className="h-full overflow-auto">
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
            {isLogin ? (
              <div className="px-8">
                {event.map((lasttime) => (
                  <List
                    lasttime={lasttime}
                    key={lasttime}
                    setLasttime={setLasttime}
                  />
                ))}
              </div>
            ) : (
              <div className="empty text-center text-gray-400 pt-48">
                暂无动态
              </div>
            )}
          </div>
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default memo(Friend);
