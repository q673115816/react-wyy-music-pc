import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { IconPlayerPlay, IconLock } from "@tabler/icons";
import { transPlayCount } from "@/common/utils";
import PlaylistAsyncReplace from "@/components/GroupPlay/PlaylistAsyncReplace";
import MenuCreate from "@/components/MenuCreate/MenuCreate";

interface iProps {
  item: {};
}

const Item: FC<iProps> = ({ item = {} }) => (
  // <MenuCreate
  //   item={item}
  //   type="playlist"
  //   schema={[
  //     ['查看歌单', '播放歌单', '下一首播放'],
  //     ['不感兴趣'],
  //   ]}
  // >
  <div className="item">
    <div className="cover relative rounded overflow-hidden group">
      <Link to={`/playlist/music/${item.id}`} className="">
        <img
          loading={"lazy"}
          className="w-full h-full aspect-square"
          src={`${item.coverImgUrl}?param=200y200`}
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 h-1/4 ui_linear_mask_top" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 ui_linear_mask_bottom" />
        <div className="absolute top-0 right-0 text-white mx-2 my-1">
          <div className="playCount flex-center">
            <IconPlayerPlay size={12} />
            {transPlayCount(item.playCount)}
          </div>
        </div>
      </Link>
      <Link
        to={`/user/${item.userId}/detail`}
        className="absolute left-0 bottom-0 text-white mx-2 my-1"
      >
        {item.creator.nickname}
      </Link>
      {item.privacy === 10 && (
        <div className="absolute right-0 bottom-0">
          <div
            className="text-white bg-black w-12 h-12"
            style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
          >
            <IconLock size={20} className="absolute right-1 bottom-1" />
          </div>
        </div>
      )}
      <PlaylistAsyncReplace
        id={item.id}
        className="playArrow ui_themeColor absolute right-0 bottom-0 m-2 p-2 bg-white bg-opacity-90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <IconPlayerPlay size={22} className="fill-current" />
      </PlaylistAsyncReplace>
    </div>
    <div className="footer text-sm mt-2 ui_ellipse">
      <Link className="name" to={`/playlist/music/${item.id}`}>
        {item.name}
      </Link>
    </div>
  </div>
);

export default memo(Item);
