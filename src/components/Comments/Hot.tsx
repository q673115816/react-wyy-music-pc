import React, { FC, memo } from "react";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import { iHot } from "./types";

const Hot: FC<iHot> = ({ hotComments, more, type }) => {
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
};

export default memo(Hot);
