import React, { memo, useEffect, useState, useRef, useMemo } from "react";
import classNames from "classnames";
import useInfinite from "@/hooks/useInfinite";
import GridVideo from "@/components/GridVideo";

import Loading from "@/components/Loading";
import Select from "./components/Select";
import type { VideoItem as Category } from "@/stores";
import { useVideoListStore } from "@/stores";

const VideoList = () => {
  const { id, initStatus, groupList, categoryList, videoList } =
    useVideoListStore();
  const [groupListVisibility, setGroupListVisibility] = useState(false);
  const currentNav = useMemo(
    () =>
      groupList.find((group) => group.id === Number(id))?.name || "全部视频",
    [id]
  );

  const domScroll = useRef<HTMLDivElement>(null);
  const domObserver = useRef<HTMLDivElement>(null);

  useInfinite(() => useVideoListStore.getState().addList(id), domScroll, domObserver);

  useEffect(() => {
    useVideoListStore.getState().init();
    return () => {
      useVideoListStore.getState().setVideoListInit();
    };
  }, []);

  useEffect(() => {
    useVideoListStore.getState().setVideoListInit();
  }, [id]);

  return (
    <div className="px-8 overflow-auto flex-auto" ref={domScroll}>
      <div className="flex items-center justify-between">
        <div className="relative z-10">
          <button
            type="button"
            className="group_select_button border rounded-full hover:bg-gray-100 text-sm"
            onClick={() => setGroupListVisibility(!groupListVisibility)}
          >
            {currentNav}
            &gt;
          </button>
          {groupListVisibility && <Select id={id} />}
        </div>
        <div className="divide-x flex">
          {categoryList.map((item: Category) => (
            <div key={item.id}>
              <button
                type="button"
                className={classNames(
                  "rounded-full px-2 mx-1",
                  id === item.id
                    ? "bg-red-50 text-red-500"
                    : "ui_text_black_hover"
                )}
                onClick={() => useVideoListStore.getState().setVideoListId({ id: item.id })}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="my-4">
        <GridVideo list={videoList} />
        <div ref={domObserver} className="flex-center">
          <Loading />
        </div>
      </div>
    </div>
  );
};

export default memo(VideoList);
