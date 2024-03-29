import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { apiCommentLike } from "@/api";
import { IconThumbUp, IconScreenShare, IconMessageCircle } from "@tabler/icons";
import Parse from "./Parse";
const enum Types {
  "歌曲",
  "MV",
  "歌单",
  "专辑",
  "电台",
  "视频",
  "动态",
}

interface iProps {
  item: any;
  handleLike: () => void;
  type: string;
  threadId: number;
}

const Comment: FC<iProps> = ({
  item = {},
  handleLike = () => null,
  type = "0",
  threadId,
}) => {
  const handleClick = async (id, t) => {
    try {
      await apiCommentLike({
        id,
        cid,
        t,
        type: Types[type],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex py-4 group">
      <Link
        to={`/user/${item.user.userId}`}
        className="w-10 border h-10 rounded-full flex-none relative overflow-hidden"
      >
        <img
          loading={"lazy"}
          className="w-full h-full"
          src={`${item.user.avatarUrl}?param=40y40`}
          alt={``}
        />
        {item.user?.avatarDetail?.identityIconUrl && (
          <img
            className="absolute right-0 bottom-0 w-3 h-3"
            src={item.user.avatarDetail.identityIconUrl}
            alt=""
          />
        )}
      </Link>
      <div className="pl-4 flex-auto w-0">
        <div className="break-words">
          <Link className="ui_link" to={`/user/${item.user.userId}`}>
            {item.user.nickname}：
          </Link>
          <span className="select-text text-gray-500">
            <Parse text={item.content} />
          </span>
        </div>
        {item.beReplied.map((beReplied) => (
          <div
            className=" p-2 bg-gray-100 mt-2"
            key={beReplied.beRepliedCommentId}
          >
            {beReplied.content ? (
              <>
                <Link className="ui_link" to={`/user/${beReplied.user.userId}`}>
                  {beReplied.user.nickname}：
                </Link>
                <span className=" select-text text-gray-500">
                  <Parse text={beReplied.content} />
                </span>
              </>
            ) : (
              <div className="text-center select-text text-gray-500">
                该评论已删除
              </div>
            )}
          </div>
        ))}
        <div className=" mt-2.5 flex">
          <span className=" text-gray-400">
            {dayjs(item.time).format("YYYY年MM月DD日 HH:mm")}
          </span>
          <div className=" ml-auto flex items-center">
            <div className="px-3 border-r opacity-0 group-hover:opacity-100 ">
              <button type="button" className="ui_text_black_hover">
                举报
              </button>
            </div>
            <div className="px-3 border-r">
              <button
                type="button"
                className="flex-center ui_text_black_hover"
                onClick={() => handleLike(item.commentId, item.liked)}
              >
                {item.liked ? (
                  <IconThumbUp size={16} stroke={0} fill="var(--theme-color)" />
                ) : (
                  <IconThumbUp size={16} stroke={1} />
                )}
                {item.likedCount}
              </button>
            </div>
            <div className="px-3 border-r">
              <button type="button" className="flex-center ui_text_black_hover">
                <IconScreenShare size={16} stroke={1} />
              </button>
            </div>
            <div className="pl-4">
              <button type="button" className="flex-center ui_text_black_hover">
                <IconMessageCircle size={16} stroke={1} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Comment);
