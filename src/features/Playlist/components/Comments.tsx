import React, { memo, useCallback, useEffect, useState } from "react";
import CommentsList from "@/components/CommentsList";
import Write from "@/components/Write";
import { apiCommentPlaylist } from "@/api";
import Loading from "@/components/Loading";
import { useParams } from "react-router-dom";

export default memo(function Comments() {
  const { id } = useParams();
  if (!id) return null;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleInit = async () => {
    const data = await apiCommentPlaylist({
      id,
    });
    setData(data);
    setLoading(false);
  };

  const handleChange = useCallback(() => {}, []);
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="px-8">
      {/* TODO */}
      <div className="pt-10 pb-10">
        <Write max={140} placeholder={""} onChange={handleChange} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <CommentsList comments={data} type={0} more={id} />
      )}
    </div>
  );
});
