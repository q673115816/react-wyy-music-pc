import React, { memo } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";

interface Comment {
  commentId: number;
}

interface iProps {
  comments: {
    hotComments: Comment[];
    comments: Comment[];
    total: number;
  };
  type: number;
  more?: string;
}

interface HotProps {
  hotComments: Comment[];
  more?: string;
  type: number;
}

const Hot = memo<HotProps>(({ hotComments, more, type }) => {
  if (!hotComments.length) return null;
  return (
    <div className="mb-10">
      <div className="subtitle font-bold">精彩评论</div>
      <div className="comments divide-y">
        {hotComments.slice(0, 10).map((item) => (
          <Comment item={item} key={item.commentId} />
        ))}
      </div>
      {more && hotComments?.length > 10 && (
        <div className="flex-center">
          <Link
            className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"
            to={`/comment/${type}/${more}/hot`}
          >
            更多精彩评论 &gt;
          </Link>
        </div>
      )}
    </div>
  );
});

export default memo<iProps>(({ comments, more, type }) => (
  <div className="">
    <Hot hotComments={comments.hotComments} more={more} type={type} />
    <div>
      <div className="font-bold">最新评论 ({comments.total})</div>
      <div className="divide-y">
        {comments.comments?.map((item) => (
          <Comment item={item} key={item.commentId} />
        ))}
      </div>
    </div>
  </div>
));
