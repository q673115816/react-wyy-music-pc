import React, { FC, memo, useCallback, useState } from "react";
import Video from "@/Layout/Player/components/Video/Video";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {
  IconCaretDown,
  IconCaretUp,
  IconCheckbox,
  IconDownload,
  IconFolderPlus,
  IconScreenShare,
  IconThumbUp,
} from "@tabler/icons";
import dayjs from "dayjs";
import { transPlayCount } from "@/common/utils";
import { setVideoListId } from "@/modules/reducers/videolist/slice";
import DownloadVideo from "@/components/Dialog/DownloadVideo";
import Write from "@/components/Write";
import { useAppDispatch } from "@/modules/hooks";
import useInit from "@/Layout/Player/useInit";
import Comment from "./Comment";
import { usePostFollowMutation } from "@/modules/services/user";
const Group = ({ list = [] }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="mt-3 space-x-1">
      {list.map((group) => (
        <Link
          className="group bg-gray-50 rounded-full px-2 py-1"
          onClick={() => dispatch(setVideoListId({ id: group.id }))}
          to="/video/list"
          key={group.id}
        >
          {group.name}
        </Link>
      ))}
    </div>
  );
};

interface iProps {
  type: string;
  vid: string;
}

const Content: FC<iProps> = ({ type, vid }) => {
  console.log("player");
  const {
    sub,
    isSub,
    isLike,
    pending,
    urls,
    detail,
    detailInfo,
    handleSub,
    handleInit,
    downloadProcess,
    downloadState,
    handleDownload,
  } = useInit({ type, vid });
  const [followPost, { isLoading }] = usePostFollowMutation();
  // const { type, vid } = params;

  const [descriptionVisibility, setDescriptionVisibility] = useState(false);
  const [value, setValue] = useState("");
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleFollow = async () => {
    try {
      const {} = await followPost({
        id: detail.creator.userId,
        t: followed ? 0 : 1,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const { DomVideoWrap, DomScroll, fixed } = useIO();
  return (
    <div className="content">
      <div className="aspect-video">
        <Video url={urls?.url} detail={detail} />
      </div>
      <div className="flex items-center mt-5">
        <Link
          to={`/user/${detail?.creator?.userId}`}
          className="rounded-full overflow-hidden border"
        >
          <img className="w-12 h-12" src={detail?.creator?.avatarUrl} alt="" />
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
              "w-20 text-red-500 bg-red-50 ml-auto h-8 rounded-full",
              { on: detail?.creator?.followed }
            )}
          >
            {detail?.creator?.followed ? "+ 已关注" : "+ 关注"}
          </button>
        )}
      </div>
      <div className="h1 flex mt-5 text-left">
        {detail?.title}
        <button
          type={`button`}
          onClick={() => setDescriptionVisibility(!descriptionVisibility)}
        >
          {descriptionVisibility ? (
            <IconCaretUp size={24} className="fill-current" />
          ) : (
            <IconCaretDown size={24} className="fill-current" />
          )}
        </button>
      </div>
      <div className="text-gray-300 mt-3">
        发布：
        {dayjs(detail?.publishTime).format("YYYY-MM-DD")}
        &nbsp; 播放
        {transPlayCount(detail?.playCount)}
      </div>
      <Group list={detail?.videoGroup} />
      {descriptionVisibility && (
        <div className="mt-5">{detail.description}</div>
      )}
      <div className="flex gap-3 mt-8">
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
      <div className="mt-8">
        <div className="mb-5">
          <Link to={`/comment/${type}/${vid}`} className="h1 font-bold">
            评论
          </Link>
          &nbsp;
          <span>{`(${detail.commentCount})`}</span>
        </div>
        <div className="mb-10">
          <Write max={140} onChange={handleChange} />
        </div>
        <Comment type={type} vid={vid} />
      </div>
    </div>
  );
};

export default memo(Content);
