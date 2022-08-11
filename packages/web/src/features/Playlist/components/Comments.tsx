import React, { memo, useCallback, useEffect, useState } from "react";
import CommentsList from "@/components/Comments/CommentsList";
import Write from "@/components/Write";
import { apiCommentPlaylist } from "@/api";
import Loading from "@/components/Loading";
import { useParams } from "react-router-dom";
import { useGetCommentPlaylistQuery } from "@/modules/services/playlist";

const Comments = () => {
  const { id = 0 } = useParams();
  const { data, isLoading } = useGetCommentPlaylistQuery({
    id,
  });

  const handleChange = useCallback(() => {}, []);

  return (
    <div className="px-8">
      {/* TODO */}
      <div className="pt-10 pb-10">
        <Write max={140} placeholder={""} onChange={handleChange} />
        <div className={`flex justify-end mt-5`}>
          <button
            type="button"
            className={`flex-center border px-3 h-8 rounded-full hover:bg-gray-50`}
          >
            评论
          </button>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <CommentsList comments={data} type={0} more={id} />
      )}
    </div>
  );
};
export default memo(Comments);
