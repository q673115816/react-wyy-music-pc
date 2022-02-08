import React, { FC, memo } from "react";
import Comment from "./Comment";
import Hot from "./Hot";
import { iList } from "./types";

const CommentsList: FC<iList> = ({ comments, more, type }) => (
  <div className="">
    {comments.hotComments?.length && (
      <Hot hotComments={comments.hotComments} more={more} type={type} />
    )}
    <div>
      <div className="font-bold">最新评论 ({comments.total})</div>
      <div className="divide-y">
        {comments.comments?.map((item) => (
          <Comment item={item} key={item.commentId} />
        ))}
      </div>
    </div>
  </div>
);

export default memo(CommentsList);
