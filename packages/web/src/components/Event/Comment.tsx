import React, { FC, memo } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Parse from "@/components/Comments/Parse";
interface iProps {
  comment: any;
}

const Comment: FC<iProps> = ({ comment }) => (
  <div className="flex py-4 px-3" key={comment.commentId}>
    <Link
      to={`/user/${comment.user.userId}`}
      className="avatar w-10 h-10 rounded-full border flex-none"
    >
      <img
        className="rounded-full w-full h-full"
        src={`${comment.user.avatarUrl}?param=40y40`}
        alt=""
      />
    </Link>
    <div className="commentContent flex-1 pl-3 select-text">
      <div className="">
        <Link to={`/user/${comment.user.userId}`} className="ui_link">
          {`${comment.user.nickname}：`}
        </Link>
        <Parse text={comment.content} />
      </div>
      {comment.beReplied.length > 0 && (
        <div className="bg-white px-2 py-1 mt-2 rounded">
          <Link
            to={`/user/${comment.beReplied[0].user.userId}`}
            className="ui_link"
          >
            @{comment.beReplied[0].user.nickname}：
          </Link>
          <span className={`text-gray-500`}>
            <Parse text={comment.beReplied[0].content} />
          </span>
        </div>
      )}
      <div className="mt-2">
        <span className="text-gray-300">
          {dayjs(comment.time).format("YYYY年MM月DD日 HH:mm:ss")}
        </span>
      </div>
    </div>
  </div>
);

export default memo(Comment);
