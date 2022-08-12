import React, { memo, useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { IconMoodSmile, IconAt, IconHash } from "@tabler/icons";
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

const switchs = {
  song: {
    apiDetail: ({ id }) => apiSongDetail({ ids: id }),
    apiComment: apiCommentMusic,
    header: Header,
  },
  mv: {
    apiDetail: apiMVDetail,
    apiComment: apiCommentMV,
    header: () => <div />,
  },
  video: {
    apiDetail: apiVideoDetail,
    apiComment: apiCommentVideo,
    header: () => <div />,
  },
};

const Comment = () => {
  console.log("comment");
  const { id, type } = useParams();
  const [detail, setDetail] = useState({});
  const [comments, setComments] = useState({});
  const [value, setValue] = useState("");
  const [loading, SetLoading] = useState(true);
  const [page, setPage] = useState(1);
  const handleDetailInit = async () => {
    try {
      const { songs } = await switchs[type].apiDetail({
        id,
      });
      setDetail(songs[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = useCallback((e) => {}, []);

  const handleCommentsInit = async () => {
    try {
      const comments = await switchs[type].apiComment({
        id,
        offset: (page - 1) * 20,
        limit,
      });
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInit = async () => {
    await handleDetailInit();
    await handleCommentsInit();
    SetLoading(false);
  };

  const MemoHeader = useMemo(() => switchs[type].header, [type]);

  useEffect(() => {
    if (loading) {
      handleInit();
    } else {
      handleCommentsInit();
    }
  }, [page]);

  if (loading)
    return (
      <div className="w-full h-full flex-center">
        <Loading />
      </div>
    );
  return (
    <div className="domComment overflow-auto px-8 py-5 h-full">
      <MemoHeader detail={detail} />
      <div className="domComment_write mt-4">
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
      <div className="domComment_main mt-8">
        <CommentsList comments={comments} more={id} type={type} />
        <Page
          total={Math.ceil(comments.total / limit)}
          page={page}
          func={setPage}
        />
      </div>
    </div>
  );
};

export default memo(Comment);
