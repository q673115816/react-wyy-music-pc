import React, { memo, useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  apiCommentMusic,
  apiSongDetail,
  apiCommentMV,
  apiMVDetail,
  apiCommentVideo,
  apiVideoDetail,
} from "@/api";
import { commentLimit as limit } from "@/common/config";
import {
  AtSender,
  EmojiSender,
  HashSender,
  Textarea,
  Editor,
} from "@/components/editor";
import CommentsList from "@/components/Comments/CommentsList";
import Loading from "@/components/Loading";
import Page from "@/components/Page";
import Header from "./Header";
import {
  useGetCommentMusicQuery,
  useGetCommentMVQuery,
  useGetCommentVideoQuery,
} from "@/modules/services/comment";

const apis = {
  song: {
    apiDetail: ({ id }) => apiSongDetail({ ids: id }),
    comment: useGetCommentMusicQuery,
  },
  mv: {
    apiDetail: apiMVDetail,
    comment: useGetCommentMVQuery,
    header: () => <div />,
  },
  video: {
    apiDetail: apiVideoDetail,
    comment: useGetCommentVideoQuery,
  },
};

const Comment = () => {
  console.log("comment");
  const { id, type } = useParams();
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading } = apis[type].comment({
    id,
    offset: (page - 1) * 20,
    limit,
  });

  if (isLoading)
    return (
      <div className="w-full h-full flex-center">
        <Loading />
      </div>
    );
  return (
    <div className="domComment overflow-auto px-8 py-5 h-full">
      <Header />
      <div className="mt-4">
        <Editor />
        <div className="flex mt-2">
          <div className="flex space-x-2">
            <EmojiSender />
            <AtSender />
            <HashSender />
          </div>
          <button
            type="button"
            className="flex-center border px-4 h-8 text-sm hover:bg-gray-100 rounded-full ml-auto"
          >
            评论
          </button>
        </div>
      </div>
      <div className="mt-8">
        <CommentsList comments={data} more={id} type={type} />
        <Page
          total={Math.ceil(data.total / limit)}
          page={page}
          func={setPage}
        />
      </div>
    </div>
  );
};

export default memo(Comment);
