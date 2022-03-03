import React, { FC, memo } from "react";
import { useGetCommentMusicQuery } from "@/modules/services/comment/api";
import { Link } from "react-router-dom";
import CommentsList from "@/components/Comments/CommentsList";
import Loading from "@/components/Loading";

interface iProps {
  id: number;
}

const Content: FC<iProps> = ({ id }) => {
  const { data, isLoading } = useGetCommentMusicQuery({ id });
  if (isLoading) return <Loading />;
  return (
    <div className="domFm_main">
      <div>
        <Link to={`/comment/song/${id}`} className="font-bold text-base">
          评论
        </Link>
        <span className="text-gray-500">
          (已有
          {data.total}
          条评论)
        </span>
      </div>
      <CommentsList comments={data} more={id} type="song" />
    </div>
  );
};

export default memo(Content);
