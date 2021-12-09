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
  const [related, setRelated] = useState([]);
  const [detail, setDetail] = useState({});
  const [detailInfo, setDetailInfo] = useState({});

  const handleInit = async (id) => {
    try {
      const [
        { data: urls },
        { data: related = [] },
        { data: detail = {} },
        detailInfo = {},
      ] = await Promise.all([
        apiMVUrl({
          id,
        }),
        apiRelatedAllvideo({
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
        setRelated(related);
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
    related,
    detail,
    detailInfo,
    handleInit,
  };
};
