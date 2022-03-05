import React, { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import {
  apiRelatedAllvideo,
  apiMVUrl,
  apiMVDetail,
  apiMVDetailInfo,
  apiCommentMV,
} from "@/api";

export default () => {
  const [pending, setPending] = useState(false);
  const [urls, setUrls] = useState({});
  const [detail, setDetail] = useState({});
  const [detailInfo, setDetailInfo] = useState({});

  const handleInit = async (id) => {
    try {
      const [
        { data: urls },
        { data: detail = {} },
        detailInfo = {},
      ] = await Promise.all([
        apiMVUrl({
          id,
        }),
        apiMVDetail({
          mvid: id,
        }),
        apiMVDetailInfo({
          mvid: id,
        }),
      ]);
      detail.title = detail.name;
      detail.description = detail.desc;
      unstable_batchedUpdates(() => {
        setUrls(urls);
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
