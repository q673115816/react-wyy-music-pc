import React, { useCallback, useEffect, useState } from "react";
import CommentsList from "@/components/CommentsList";
import Write from "@/components/Write";
import { apiCommentPlaylist } from "@/api";
import { useQuery } from "react-query";
import Loading from "@/components/Loading";
export default ({ id }) => {
  const { data, status } = useQuery("comments", async () => {
    return await apiCommentPlaylist({
      id,
    });
  });

  const handleChange = useCallback(() => {}, []);

  return (
    <div className="px-8">
      {/* TODO */}
      <div className="pt-10 pb-10">
        <Write max={140} placeholder={""} onChange={handleChange} />
      </div>
      {status === "loading" && <Loading />}
      {status === "success" && (
        <CommentsList comments={data} type={0} more={id} />
      )}
    </div>
  );
};
