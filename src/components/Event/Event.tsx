import React, { FC, memo, useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import {
  IconThumbUp,
  IconShare,
  IconMessage,
  IconDots,
  IconPlayerPlay,
} from "@tabler/icons";
import { apiCommentEvent, apiSongDetail } from "@/api";
import { transTextEmoji } from "@/common/faces";
import Comment from "./Comment";
import Textarea from "./Textarea";
import Song from "./Song";
import Pics from "./Pics";
import Resource from "./Resource";
import "./style.scss";

const types = {
  18: "分享单曲",
  36: "分享歌手",
};

interface iProps {
  item: {};
  commentIsShow: boolean;
  handleToggleComment: () => void;
}

const Event: FC<iProps> = ({
  item = {},
  commentIsShow,
  handleToggleComment,
}) => {
  // console.log('event');
  const json = JSON.parse(item.json);
  const [comments, setComments] = useState([]);
  const [hotComments, setHotComments] = useState([]);
  // console.log(json);
  // const { comments, hotComments } = useSelector(({ friend }) => friend);
  const handleGetComment = async (threadId: number) => {
    try {
      const { comments, hotComments } = await apiCommentEvent({
        threadId,
      });
      setComments(comments);
      setHotComments(hotComments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (commentIsShow) {
      handleGetComment(item.info.threadId);
    }
  }, [commentIsShow]);
  if (item.type === 33) {
    // console.log(json);
    return (
      <div className="py-5 px-12">
        <div className="relative rounded-xl overflow-hidden">
          <img src={json.coverPCUrl} alt="" />
          <div className="absolute border-b border-opacity-20 border-t border-white flex-center h-20 inset-0 m-auto text-center text-white w-min whitespace-nowrap">
            <div className="text-xl">{`#${json.title}#`}</div>
            <div className="-translate-y-1/2 absolute top-full transform">
              {`${json.participateCount}参与`}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="ui_event_item py-5 flex">
      <Link
        to={`/user/${item.user.userId}`}
        className="avatar flex-none w-10 h-10 relative border rounded-full"
      >
        <img
          className="rounded-full"
          src={`${item.user.avatarUrl}?param=40y40`}
          alt=""
        />
        {item?.user?.avatarDetail?.identityIconUrl && (
          <img
            className="absolute bottom-0 right-0 w-3.5 h-3.5"
            src={item.user.avatarDetail.identityIconUrl}
            alt=""
          />
        )}
      </Link>
      <div className="content ml-2.5 flex-auto">
        <div className="name">
          <Link className="ui_link" to={`/user/${item.user.userId}`}>
            {item.user.nickname}
          </Link>
          &nbsp;
          <span className="text-gray-500">{types[item.type]}</span>
        </div>
        <div className="time mt-2">
          <Link to={`/comment/event/${item.id}`} className="ui_text_gray_hover">
            {dayjs(item.showTime).format("MM月DD日 HH:mm")}
          </Link>
        </div>
        <div className="article">
          <div className="text whitespace-pre-line text-sm mt-2.5">
            {json.msg && transTextEmoji(json.msg)}
          </div>
          <Resource item={json.resource} />
          <Song item={json.song} />
          <Pics item={item.pics} />
          <div className="info flex mt-2.5">
            <div className="left text-gray-400">
              {item?.rcmdInfo?.reason && `--${item.rcmdInfo.reason}`}
            </div>
            <div className="right ml-auto divide-x flex">
              <div className="px-3">
                <button
                  type="button"
                  className="action ui_text_gray_hover flex-center"
                >
                  <IconThumbUp size={16} />
                  {item.info.likedCount > 0 && `(${item.info.likedCount})`}
                </button>
              </div>
              <div className="px-3">
                <button
                  type="button"
                  className="action ui_text_gray_hover flex-center"
                >
                  <IconShare size={16} />
                  &nbsp;
                  {item.info.shareCount > 0 && `(${item.info.shareCount})`}
                </button>
              </div>
              <div className="px-3">
                <button
                  type="button"
                  className="action ui_text_gray_hover flex-center"
                  onClick={() => handleToggleComment(item.info.threadId)}
                >
                  <IconMessage size={16} />
                  &nbsp;
                  {item.info.commentCount > 0 && `(${item.info.commentCount})`}
                </button>
              </div>
              <div className="px-3">
                <button
                  type="button"
                  className="action ui_text_gray_hover flex-center"
                >
                  <IconDots size={16} />
                </button>
              </div>
            </div>
          </div>
          {commentIsShow && (
            <div className="comment bg-gray-100 mt-3 rounded">
              <div className="p-3">
                <Textarea />
              </div>
              {hotComments.length > 0 && (
                <>
                  <div className="text-sm px-3 text-gray-500 font-bold">
                    精彩评论
                  </div>
                  <div className="divide-y">
                    {hotComments.slice(0, 10).map((comment) => (
                      <Comment key={comment.commentId} comment={comment} />
                    ))}
                  </div>
                </>
              )}
              {comments.length > 0 ? (
                <>
                  <div className="text-sm px-3 text-gray-500 font-bold">
                    最新评论
                    {`(${comments.length})`}
                  </div>
                  <div className="divide-y">
                    {comments.slice(0, 10).map((comment) => (
                      <Comment key={comment.commentId} comment={comment} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex-center py-10 text-gray-500">
                  还没有评论哦，快来抢沙发~
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Event);
