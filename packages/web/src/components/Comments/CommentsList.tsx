import React, { FC, memo } from "react";
import Comment from "./Comment";
import Hot from "./Hot";
import { iList } from "./types";

const CommentsList: FC<iList> = ({ comments, more, type }) => {
  if (comments.comments.length === 0) {
    return (
      <div className={`text-center text-gray-400 text-sm`}>
        还没有评论，快来抢沙发~
      </div>
    );
  }
  return (
    <div className="">
      <Hot hotComments={comments.hotComments} more={more} type={type} />
      <div>
        <div className="font-bold text-sm">最新评论 ({comments.total})</div>
        <div className="divide-y">
          {comments.comments?.map((item) => (
            <Comment item={item} key={item.commentId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(CommentsList);
