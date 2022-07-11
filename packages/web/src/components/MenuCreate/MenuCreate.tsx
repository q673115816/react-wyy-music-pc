import React, { FC, memo, PropsWithChildren } from "react";
import { setAudioImmediate } from "@/modules/reducers/audio/slice";
import { setContextMenuShow } from "@/modules/reducers/mask/slice";

import config from "./config";
import { useAppDispatch } from "@/modules/hooks";

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
  const dispatch = useAppDispatch();
  const handleDoubleClick = (item) => {
    dispatch(
      setAudioImmediate({
        currentSong: item,
      })
    );
  };
  const handleRightClick = async (e, item, type) => {
    try {
      const { total } = await config[type]?.comment({
        id: item.id,
      });
      dispatch(
        setContextMenuShow({
          contextMenuX: e.clientX,
          contextMenuY: e.clientY,
          contextMenuItem: item,
          contextMenuTotal: total,
          contextMenuType: type,
          contextMenuItemId: item.id,
          contextMenuSechma: schema,
        })
      );
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
