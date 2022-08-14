import React, { memo, useState } from "react";
import CommentsList from "@/components/Comments/CommentsList";
import Page from "@/components/Page/Page";
import Loading from "@/components/Loading";
import { useGetCommentMusicQuery } from "@/modules/services/comment/api";
import { useAppSelector } from "@/modules/hooks";
import { audioSelector } from "@/modules/reducers/audio/slice";

const Content = () => {
  const { currentSong } = useAppSelector(audioSelector);
  const [page, setPage] = useState(1);
  const limit = 20;
  const { data, isLoading } = useGetCommentMusicQuery({
    id: currentSong.id,
    limit,
    offset: (page - 1) * limit,
  });
  if (isLoading) return <Loading />;
  return (
    <>
      <CommentsList comments={data} more={currentSong.id} type="song" />
      <Page total={Math.ceil(data.total / limit)} page={page} func={setPage} />
    </>
  );
};

export default memo(Content);
