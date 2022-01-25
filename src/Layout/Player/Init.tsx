import { useMemo, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import {
  apiFollow,
  apiVideoSub,
  apiMVSub,
  apiMVSublist,
  apiCommentVideo,
  apiCommentMV,
  apiResourceLike,
} from "@/api";
import { commentLimit as limit } from "@/common/config";
import {
  setToast,
  setDialogDownloadVideoShow,
} from "@/modules/reducers/mask/slice";
import { setMVSublist } from "@/modules/reducers/account/slice";
import UseVideoInit from "./UseVideoInit";
import UseMVInit from "./UseMVInit";
import FNDownload from "./Download";

const switchs = {
  video: {
    init: UseVideoInit,
    name: "视频详情",
    sub: "subscribeCount",
    apiComments: apiCommentVideo,
  },
  mv: {
    init: UseMVInit,
    name: "MV详情",
    sub: "subCount",
    apiComments: apiCommentMV,
  },
};

export default ({ vid, type }) => {
  const dispatch = useAppDispatch();
  const { mvSublist } = useAppSelector(({ account }) => account);

  const [page, setPage] = useState(1);
  const [comments, setComments] = useState({});
  const [commentsLoading, setCommentsLoading] = useState(true);

  const isSub = useMemo(
    () => mvSublist.find((mv) => mv.vid === vid),
    [vid, mvSublist]
  );
  const isLike = useMemo(() => null, [vid]);
  const { pending, urls, related, detail, detailInfo, handleInit } =
    switchs[type].init();

  const handleGetMVSublist = async () => {
    try {
      const { data: mvSublist } = await apiMVSublist();
      dispatch(
        setMVSublist({
          mvSublist,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = () => {
    dispatch(
      apiResourceLike({
        id: vid,
        type: type === "mv" ? "1" : "5",
        t: isLike ? 0 : 1,
      })
    );
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
      dispatch(setToast(isSub ? "取消收藏成功" : "收藏成功"));
    } catch (error) {
      console.log(error);
    }
  };

  const handleComments = async () => {
    try {
      const comments = await switchs[type].apiComments({
        id: vid,
        limit,
        offset: (page - 1) * limit,
      });
      setComments(comments);
      if (commentsLoading) {
        setCommentsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const params = useMemo(() => ({ type, vid }), [type, vid]);

  const next = useMemo(
    () => ({ title: related?.[0]?.title || "", link: "" }),
    [type, vid]
  );

  const {
    downloadProcess,
    downloadState,
    handleInitDownload,
    handleUnLoadDownload,
    handleDownload,
  } = FNDownload(urls?.url, detail?.title);

  useEffect(() => {
    handleInit(vid);
    handleComments();
    handleInitDownload();
    return () => {
      handleUnLoadDownload();
    };
  }, [vid]);

  useEffect(() => {
    handleComments();
  }, [page]);

  return {
    params,
    name: switchs[type].name,
    sub: switchs[type].sub,
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
  };
};
