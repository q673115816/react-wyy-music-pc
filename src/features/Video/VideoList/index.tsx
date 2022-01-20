import React, { memo, useEffect, useState, useRef, useMemo } from "react";
import classNames from "classnames";
import useInfinite from "@/hooks/useInfinite";
import DomGridVideo from "@/components/GridVideo";
import {
  handleAddList,
  handlePrevInit,
  setVideoListId,
  setVideoListInit,
  Category,
  VideoListSelector,
} from "@/reducers/videolist/slice";
import { useAppSelector, useAppDispatch } from "@/reducers/hooks";
import DomLoading from "@/components/Loading";
import Select from "./components/Select";

const VideoList = () => {
  const dispatch = useAppDispatch();
  const { id, initStatus, groupList, categoryList, videoList } =
    useAppSelector(VideoListSelector);
  const [groupListVisibility, setGroupListVisibility] = useState(false);
  const currentNav = useMemo(
    () =>
      groupList.find((group) => group.id === Number(id))?.name || "全部视频",
    [id]
  );

  const domScroll = useRef<HTMLDivElement>(null);
  const domObserver = useRef<HTMLDivElement>(null);

  useInfinite(() => dispatch(handleAddList(id)), domScroll, domObserver);

  useEffect(() => {
    dispatch(handlePrevInit());
    return () => {
      dispatch(setVideoListInit());
    };
  }, []);

  useEffect(() => {
    dispatch(setVideoListInit());
  }, [id]);

  return (
    <div
      className="domVideoList_content px-8 overflow-auto flex-auto"
      ref={domScroll}
    >
      <div className="video_sort_filter_bar flex items-center justify-between">
        <div className="group_select_wrap relative z-10">
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
        <div className="recommend_nav divide-x flex">
          {categoryList.map((item: Category) => (
            <div key={item.id}>
              <button
                type="button"
                className={classNames(
                  "recommend_nav_link rounded-full px-2 mx-1",
                  id === item.id
                    ? "bg-red-50 text-red-500"
                    : "ui_text_black_hover"
                )}
                onClick={() => dispatch(setVideoListId({ id: item.id }))}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="my-4">
        <DomGridVideo list={videoList} />
        <div ref={domObserver} className="flex-center">
          <DomLoading />
        </div>
      </div>
    </div>
  );
};

export default memo(VideoList);
