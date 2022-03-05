import React, { FC, memo } from "react";
import Comment from "@/components/Event/Comment";
import { useGetCommentEventQuery } from "@/modules/services/comment/api";
import Loading from "@/components/Loading";

interface iProps {
  threadId: number;
}

const Content: FC<iProps> = ({ threadId }) => {
  const { data, isLoading } = useGetCommentEventQuery({
    threadId,
  });
  const { comments = [], hotComments = [] } = data || {};
  if (isLoading) return <Loading />;
  return (
    <>
      {hotComments.length > 0 && (
        <>
          <div className="text-sm px-3 text-gray-500 font-bold">精彩评论</div>
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
    </>
  );
};

export default memo(Content);
