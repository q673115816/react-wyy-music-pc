import React, { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { apiPost } from "@/shared/api/client";

export default () => {
  const [pending, setPending] = useState(false);
  const [urls, setUrls] = useState({});
  const [detail, setDetail] = useState({});
  const [detailInfo, setDetailInfo] = useState({});

  const handleInit = async (vid: string) => {
    try {
      const [{ urls }, { data: detail = {} }, detailInfo = {}] = await Promise.all([
        apiPost("/video/url", {
          id: vid,
        }),
        apiPost("/video/detail", {
          id: vid,
        }),
        apiPost("/video/detail/info", {
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
