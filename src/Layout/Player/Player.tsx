import React, { useEffect, useState, memo, useMemo, useCallback } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { commentLimit as limit } from "@/common/config";
import classNames from "classnames";
import dayjs from "dayjs";
import {
  IconChevronLeft,
  IconCaretUp,
  IconCaretDown,
  IconThumbUp,
  IconFolderPlus,
  IconCheckbox,
  IconScreenShare,
  IconDownload,
} from "@tabler/icons";
import "./style.scss";

import { transPlayCount } from "@/common/utils";
import { setAudioRunningPause } from "@/reducers/audio/slice";

import { apiFollow, apiCommentVideo, apiCommentMV } from "@/api";
import { setVideoListId } from "@/reducers/videolist/slice";
import Write from "@/components/Write";

import { useAppDispatch } from "@/reducers/hooks";
import CommentsList from "@/components/CommentsList";
import Page from "@/components/Page";

import Loading from "@/components/Loading";
import DownloadVideo from "@/components/Dialog/DownloadVideo";
import Related from "./Related";
import Video from "./components/Video";
import FNInit from "./Init";
import FNIO from "./IO";

const Group = ({ list = [], func }) => (
  <div className="domVideoDetail_group mt-3 space-x-1">
    {list.map((group) => (
      <Link
        className="group bg-gray-50 rounded-full px-2 py-1"
        onClick={() => func(group.id)}
        to="/video/list"
        key={group.id}
      >
        {group.name}
      </Link>
    ))}
  </div>
);

const Player = () => {
  const { type, vid } = useParams();
  console.log("player");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAudioRunningPause());
  }, []);

  const {
    name,
    sub,
    isSub,
    isLike,
    pending,
    urls,
    related,
    detail,
    detailInfo,
    handleSub,
    handleInit,
    downloadProcess,
    downloadState,
    handleDownload,

    page,
    comments,
    commentsLoading,
    setPage,

    next,
  } = FNInit({ type, vid });

  // const { type, vid } = params;

  const navigate = useNavigate();
  const [descriptionVisibility, setDescriptionVisibility] = useState(false);
  const [value, setValue] = useState("");
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const handleFollow = async () => {
    try {
      const {} = await apiFollow({
        id: detail.creator.userId,
        t: followed ? 0 : 1,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { DomVideoWrap, DomScroll, fixed } = FNIO();

  return (
    <div className=" overflow-auto h-full" ref={DomScroll}>
      <div style={{ width: 930 }} className="flex justify-between m-auto">
        <div className="left" style={{ width: 620 }}>
          <div className="domVideoDetail_header flex items-center">
            <button
              type="button"
              className="flex items-center text-base font-bold"
              onClick={() => navigate(-1)}
            >
              <IconChevronLeft size={28} stroke={1} />
              {name}
            </button>
          </div>
          <div className="aspect-video" ref={DomVideoWrap}>
            <Video url={urls?.url} detail={detail} fixed={fixed} next={next} />
          </div>
          <div className="domVideoDetail_creator flex items-center mt-5">
            <Link
              to={`/user/${detail?.creator?.userId}`}
              className="avatar rounded-full overflow-hidden border"
            >
              <img className="" src={detail?.creator?.avatarUrl} alt="" />
            </Link>
            <Link
              className="nickname ml-2.5"
              to={`/user/${detail?.creator?.userId}`}
            >
              {detail?.creator?.nickname}
            </Link>
            {type === "video" && (
              <button
                onClick={handleFollow}
                type="button"
                className={classNames(
                  "follow text-red-500 bg-red-50 ml-auto h-8 rounded-full",
                  { on: detail?.creator?.followed }
                )}
              >
                {detail?.creator?.followed ? "+ 已关注" : "+ 关注"}
              </button>
            )}
          </div>
          <button
            type="button"
            className="domVideoDetail_title h1 flex items-center mt-5 text-left"
            onClick={() => setDescriptionVisibility(!descriptionVisibility)}
          >
            {detail?.title}
            {descriptionVisibility ? (
              <IconCaretUp size={24} className="fill-current" />
            ) : (
              <IconCaretDown size={24} className="fill-current" />
            )}
          </button>
          <div className="domVideoDetail_info text-gray-300 mt-3">
            发布：
            {dayjs(detail?.publishTime).format("YYYY-MM-DD")}
            &nbsp; 播放
            {transPlayCount(detail?.playCount)}
          </div>
          <Group
            list={detail?.videoGroup}
            func={(id) => dispatch(setVideoListId({ id }))}
          />
          {descriptionVisibility && (
            <div className="domVideoDetail_description mt-4">
              {detail.description}
            </div>
          )}
          <div className="domVideoDetail_actions flex space-x-3 mt-8">
            <button
              type="button"
              className="flex-center border h-8 rounded-full px-6 hover:bg-gray-100"
            >
              <IconThumbUp size={20} stroke={1} />
              {detailInfo.liked ? "已赞" : "赞"}({detailInfo.likedCount})
            </button>
            <button
              type="button"
              className="flex-center border h-8 rounded-full px-6 hover:bg-gray-100"
              onClick={handleSub}
            >
              {isSub ? (
                <IconCheckbox size={20} stroke={1} />
              ) : (
                <IconFolderPlus size={20} stroke={1} />
              )}
              {isSub ? "已收藏" : "收藏"}({detail[sub]})
            </button>
            <button
              type="button"
              className="flex-center border h-8 rounded-full px-6 hover:bg-gray-100"
            >
              <IconScreenShare size={20} stroke={1} />
              分享
              {`(${detailInfo.shareCount})`}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className={classNames(
                "relative w-24 h-8 rounded-full overflow-hidden",
                downloadProcess === 0 ? " border" : ""
              )}
            >
              <div className="absolute inset-0 flex justify-end overflow-hidden">
                <span className="w-24 h-8 flex-center bg-white">
                  <IconDownload size={20} stroke={1} />
                  {downloadState}
                </span>
              </div>
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ right: `${(1 - downloadProcess) * 100}%` }}
              >
                <span className="w-24 h-8 flex-center ui_theme_bg_color text-white">
                  <IconDownload size={20} stroke={1} />
                  {downloadState}
                </span>
              </div>
            </button>
            <DownloadVideo />
          </div>
          <div className="domVideoDetail_main mt-8">
            <div className="title mb-5">
              <Link to={`/comment/${type}/${vid}`} className="h1 font-bold">
                评论
              </Link>
              &nbsp;
              <span>{`(${detail.commentCount})`}</span>
            </div>
            <div className="domVideoDetail_feedback mb-10">
              <Write max={140} onChange={handleChange} />
            </div>
            {commentsLoading ? (
              <div className="">
                <Loading />
              </div>
            ) : (
              <>
                <CommentsList comments={comments} />
                <Page
                  total={Math.ceil(comments.total / limit)}
                  page={page}
                  func={setPage}
                />
              </>
            )}
          </div>
        </div>
        <Related related={related} />
      </div>
    </div>
  );
};

export default memo(Player);
