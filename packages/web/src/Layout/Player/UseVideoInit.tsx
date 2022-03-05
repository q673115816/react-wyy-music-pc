import React, { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import {
  apiRelatedAllvideo,
  apiVideoUrl,
  apiVideoDetail,
  apiVideoDetailInfo,
} from "@/api";

export default () => {
  const [pending, setPending] = useState(false);
  const [urls, setUrls] = useState({});
  const [detail, setDetail] = useState({});
  const [detailInfo, setDetailInfo] = useState({});

  const handleInit = async (vid: string) => {
    try {
      const [
        { urls },
        { data: detail = {} },
        detailInfo = {},
      ] = await Promise.all([
        apiVideoUrl({
          id: vid,
        }),
        apiVideoDetail({
          id: vid,
        }),
        apiVideoDetailInfo({
          vid,
        }),
      ]);
      detail.playCount = detail.playTime;
      unstable_batchedUpdates(() => {
        setUrls(urls[0]);
        setDetail(detail);
        setDetailInfo(detailInfo);
        setPending(true);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    pending,
    urls,
    detail,
    detailInfo,
    handleInit,
  };
};
