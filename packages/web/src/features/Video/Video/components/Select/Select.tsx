import classNames from "classnames";

import React, { memo, FC } from "react";
import "./style.scss";
import { useVideoListStore } from "@/stores";

interface iProps {
  id: number;
}

const Select: FC<iProps> = ({ id }) => {
  const { groupList } = useVideoListStore();
  return (
    <div className="group_select_box absolute top-100 p-5 bg-white overflow-auto shadow">
      <div className="border-b pb-2">
        <button
          type="button"
          className={classNames(
            "group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",
            id === 0 ? "text-red-500 bg-red-50" : ""
          )}
          onClick={() => useVideoListStore.getState().setVideoListId({ id: 0 })}
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
            onClick={() => useVideoListStore.getState().setVideoListId({ id: item.id })}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(Select);
