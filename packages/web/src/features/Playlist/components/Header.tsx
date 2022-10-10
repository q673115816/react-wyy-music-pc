import React, { memo, FC, PropsWithChildren, useCallback } from "react";
import { transPlayCount, transSubscribeCount } from "@/common/utils";
import {
  IconFolderPlus,
  IconScreenShare,
  IconCloudDownload,
  IconCheckbox,
} from "@tabler/icons";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";

import Tags from "./Tags";
import Description from "./Description";
import { useToast } from "@/components/Toast";
import { usePostPlaylistSubscribeMutation } from "@/modules/services/playlist";

interface iHeader {
  data: {};
}

const Header: FC<PropsWithChildren<iHeader>> = ({ data = {}, children }) => {
  const toast = useToast();
  const { id = "" } = useParams();
  const [playlistSbuscribePost] = usePostPlaylistSubscribeMutation();
  // TODO
  const handleSub = async (isSub: boolean) => {
    try {
      const { code } = await playlistSbuscribePost({
        t: isSub ? 2 : 1,
        id,
      });
      if (code === 200) {
        toast(isSub ? "取消收藏成功！" : "收藏成功！");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-8 flex items-start">
      <div className="border rounded overflow-hidden flex-none w-92 h-92">
        <img
          loading={`lazy`}
          className="w-full h-full"
          src={`${data.playlist.coverImgUrl}?param=200y200`}
          alt=""
        />
      </div>
      <div className="info flex-auto w-0 ml-5">
        <div className="name leading-tight">
          <span className="whitespace-nowrap text-red-500 border border-current p-0.5 rounded mr-2 align-bottom inline-block">
            歌单
          </span>
          <span className="h1 select-text">
            {data.playlist.name || "我喜欢的音乐"}
          </span>
        </div>
        <div className="creator flex items-center mt-2">
          <Link
            to={`/user/${data.playlist.creator?.userId}`}
            className="w-6 h-6 rounded-full overflow-hidden mr-2"
          >
            <img
              className=""
              src={`${data.playlist.creator?.avatarUrl}?param=50y50`}
              alt=""
            />
          </Link>

          <Link
            to={`/user/${data.playlist.creator?.userId}`}
            className="nickname ui_link mr-2"
          >
            {data.playlist.creator?.nickname}
          </Link>

          <span className="text-gray-500">
            {dayjs(data.playlist.createTime || Date.now()).format("YYYY-MM-DD")}
            创建
          </span>
        </div>
        <div className="actions flex space-x-2 mt-2">
          {children}
          <button
            onClick={() => handleSub(data.playlist.subscribed)}
            type="button"
            className="flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50"
          >
            {data.playlist.subscribed ? (
              <IconCheckbox size={20} stroke={1} />
            ) : (
              <IconFolderPlus size={20} stroke={1} />
            )}
            &nbsp;
            {data.playlist.subscribed ? "已收藏" : "收藏"}
            {`(${transSubscribeCount(data.playlist.subscribedCount)})`}
          </button>
          <button
            type="button"
            className="flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50"
          >
            <IconScreenShare size={20} stroke={1} />
            &nbsp; 分享
            {`(${transSubscribeCount(data.playlist.shareCount)})`}
          </button>
          <button
            type="button"
            className="flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50"
          >
            <IconCloudDownload size={20} stroke={1} />
            &nbsp; 下载全部
          </button>
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
          <Tags tags={data.playlist.tags} />
          <div>
            <span className="mr-3">
              歌曲：
              <span className="text-gray-500">{data.playlist.trackCount}</span>
            </span>
            <span>
              播放：
              <span className="text-gray-500">
                {transPlayCount(data.playlist.playCount)}
              </span>
            </span>
          </div>
          <Description description={data.playlist.description} />
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
