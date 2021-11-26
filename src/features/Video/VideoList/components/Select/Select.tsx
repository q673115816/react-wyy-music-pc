import classNames from "classnames";
import { setVideoListId, VideoListSelector } from "@/reducers/videolist/slice";
import React, { memo, FC } from "react";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import "./style.scss";

interface iProps {
  id: number;
}

const Select: FC<iProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const { groupList } = useAppSelector(VideoListSelector);
  return (
    <div className="group_select_box absolute top-100 p-5 bg-white overflow-auto shadow">
      <div className="border-b pb-2">
        <button
          type="button"
          className={classNames(
            "group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",
            id === 0 ? "text-red-500 bg-red-50" : ""
          )}
          onClick={() => dispatch(setVideoListId({ id: 0 }))}
        >
          全部视频
        </button>
      </div>
      <div className="group_select_list grid grid-cols-6 gap-y-5 p-4">
        {groupList.map((item) => (
          <button
            type="button"
            className={classNames(
              "group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",
              item.id === id ? "text-red-500 bg-red-50" : ""
            )}
            key={item.id}
            onClick={() => dispatch(setVideoListId({ id: item.id }))}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(Select);
