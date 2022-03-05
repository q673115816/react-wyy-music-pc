import React, { memo, useEffect, useState, useMemo, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { IconPlayerPlay, IconMoodSmile, IconAt, IconHash } from "@tabler/icons";
import {
  apiCommentMusic,
  apiSongDetail,
  apiCommentMV,
  apiMVDetail,
  apiCommentVideo,
  apiVideoDetail,
} from "@/api";
import { commentLimit as limit } from "@/common/config";
import Write from "@/components/Write";
import CommentsList from "@/components/Comments/CommentsList";
import Loading from "@/components/Loading";
import Page from "@/components/Page";

const SongHeader = ({ detail }) => (
  <div className="domComment_header">
    <div className="domComment_infos flex ">
      <div className="cover h-20 rounded overflow-hidden relative">
        <img
          loading={"lazy"}
          className="h-full"
          src={detail.al.picUrl}
          alt=""
        />
        <div className="ico absolute inset-0 m-auto flex-center w-8 h-8 ui_themeColor rounded-full bg-white bg-opacity-90">
          <IconPlayerPlay size={16} className="fill-current" />
        </div>
      </div>
      <div className="content px-6 py-2">
        <div className="title text-lg">
          {detail.name}
          <span className={"text-gray-500"}>
            {detail.alia.length > 0 && `(${detail.alia})`}
          </span>
        </div>
        <div className="info text-gray-500 mt-2 space-x-5">
          <span>
            专辑：
            <Link
              className="ui_text_gray_hover"
              to={`/playlist/album/${detail.al.id}`}
            >
              {detail.al?.name}
            </Link>
          </span>
          <span>
            歌手：
            {detail.ar.map((item, index) => (
              <span key={item.id}>
                {index > 0 && " / "}
                <Link className="ui_text_gray_hover" to={`/artist/${item.id}`}>
                  {item.name}
                </Link>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const switchs = {
  song: {
    apiDetail: ({ id }) => apiSongDetail({ ids: id }),
    apiComment: apiCommentMusic,
    header: SongHeader,
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

export default memo(function Comment() {
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

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

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
        <Write onChange={handleChange} max={140} />
        <div className="domComment_write_actions flex mt-2.5">
          <div className="flex space-x-2">
            <button type="button" className="text-gray-500 hover:text-black">
              <IconMoodSmile size={20} stroke={1.5} />
            </button>
            <button type="button" className="text-gray-500 hover:text-black">
              <IconAt size={20} stroke={1.5} />
            </button>
            <button type="button" className="text-gray-500 hover:text-black">
              <IconHash size={20} stroke={1.5} />
            </button>
          </div>
          <button
            type="button"
            className="ui_btn flex-center border px-4 h-8 text-sm hover:bg-gray-100 rounded-full ml-auto"
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
});
