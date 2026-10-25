import React, { FC, memo, PropsWithChildren } from "react";

import config from "./config";
import { useAudioStore, useMaskStore } from "@/stores";

const defaultSchema = [
  ["评论", "播放", "下一首播放"],
  ["收藏到歌单", "分享", "复制链接", "不感兴趣", "下载"],
];

interface iProps extends PropsWithChildren {
  type: string;
  item: object;
  schema: string[][];
}

const MenuCreate: FC<iProps> = ({
  children,
  item = {},
  type = "song",
  schema = defaultSchema,
  ...props
}) => {
  const handleDoubleClick = (item) => {
    useAudioStore.getState().setAudioImmediate({
        currentSong: item,
      })
    ;
  };
  const handleRightClick = async (e, item, type) => {
    try {
      const { total } = await config[type]?.comment({
        id: item.id,
      });
      useMaskStore.getState().setContextMenuShow({
          contextMenuX: e.clientX,
          contextMenuY: e.clientY,
          contextMenuItem: item,
          contextMenuTotal: total,
          contextMenuType: type,
          contextMenuItemId: item.id,
          contextMenuSchema: schema,
        })
      ;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      onDoubleClick={
        type === "song" ? () => handleDoubleClick(item) : undefined
      }
      onContextMenu={(e) => handleRightClick(e, item, type)}
      {...props}
    >
      {children}
    </div>
  );
};

export default memo(MenuCreate);
