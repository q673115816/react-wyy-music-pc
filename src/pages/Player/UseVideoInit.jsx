import React, { useState } from 'react';
import {
  apiRelatedAllvideo,
  apiVideoUrl,
  apiVideoDetail,
  apiVideoDetailInfo,
  apiCommentVideo,
} from '@/api';

export default () => {
  const [pending, setPending] = useState(false);
  const [urls, setUrls] = useState({});
  const [related, setRelated] = useState([]);
  const [detail, setDetail] = useState({});
  const [detailInfo, setDetailInfo] = useState({});
  const [comments, setComments] = useState({});

  const handleInit = async (vid) => {
    try {
      const [
        { urls },
        { data: related = [] },
        { data: detail = {} },
        detailInfo = {},
        comments = {},
      ] = await Promise.all([
        apiVideoUrl({
          id: vid,
        }),
        apiRelatedAllvideo({
          id: vid,
        }),
        apiVideoDetail({
          id: vid,
        }),
        apiVideoDetailInfo({
          vid,
        }),
        apiCommentVideo({
          id: vid,
        }),
      ]);
      setPending(true);
      setUrls(urls[0]);
      setRelated(related);
      setDetail(detail);
      setDetailInfo(detailInfo);
      setComments(comments);
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
    comments,
    handleInit,
  };
};
