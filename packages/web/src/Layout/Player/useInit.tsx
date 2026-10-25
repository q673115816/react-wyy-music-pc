import { useMemo, useEffect } from "react";
import {
  apiFollow,
  apiVideoSub,
  apiMVSub,
  apiMVSublist,
  apiResourceLike,
} from "@/api";

import FNDownload from "./Download";

import config from "./config";
import { useToast } from "@/components/Toast";
import { useAccountStore } from "@/stores";

interface iProps {
  vid: string;
  type: string;
}

const UseInit = ({ vid, type }: iProps) => {
  const toast = useToast();
  const { mvSublist } = useAccountStore();

  const isSub = useMemo(
    () => mvSublist.find((mv) => mv.vid === vid),
    [vid, mvSublist]
  );
  const { pending, urls, detail, detailInfo, handleInit } = config[type].init();
  const isLike = detailInfo?.liked;

  const handleGetMVSublist = async () => {
    try {
      const { data: mvSublist } = await apiMVSublist();
      useAccountStore.getState().setMVSublist({
          mvSublist,
        })
      ;
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async () => {
    await apiResourceLike({
      id: vid,
      type: type === "mv" ? "1" : "5",
      t: isLike ? 0 : 1,
    });
  };

  const handleSub = async () => {
    try {
      const { code } =
        type === "video"
          ? await apiVideoSub({
              id: vid,
              t: isSub ? 0 : 1,
            })
          : await apiMVSub({
              mvid: vid,
              t: isSub ? 0 : 1,
            });
      if (code === 200) handleGetMVSublist();
      toast(isSub ? "取消收藏成功" : "收藏成功");
    } catch (error) {
      console.log(error);
    }
  };

  const params = useMemo(() => ({ type, vid }), [type, vid]);

  const {
    downloadProcess,
    downloadState,
    handleInitDownload,
    handleUnLoadDownload,
    handleDownload,
  } = FNDownload(urls?.url, detail?.title);

  useEffect(() => {
    handleInit(vid);
    handleInitDownload();
    return () => {
      handleUnLoadDownload();
    };
  }, [vid]);

  return {
    params,
    sub: config[type].sub,
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
  };
};

export default UseInit;
