import React, { useState, useEffect, useRef, memo } from "react";
import { apiCommentHot, apiCommentLike } from "@/api";
import Comment from "@/components/Comments/Comment";
import useInfinite from "@/hooks/useInfinite";
import Loading from "@/components/Loading";
import produce from "immer";
import { useParams } from "react-router-dom";

export default memo(function Hot() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const refHasMore = useRef(true);
  const offset = useRef(0);
  const domObserver = useRef(null);
  const domScroll = useRef(null);
  const limit = 20;

  const handleLike = async (cid, t) => {
    try {
      const { code } = await apiCommentLike({
        id,
        cid,
        t: t ? 0 : 1,
        type: 0,
      });
      if (code === 200) {
        setData(
          produce((draft) => {
            draft.forEach((item) => {
              if (item.commentId === cid) {
                item.liked = !t;
                item.likedCount += t ? -1 : 1;
              }
            });
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInit = async () => {
    if (!refHasMore.current) return false;
    try {
      const { hotComments, hasMore } = await apiCommentHot({
        id,
        type: 0,
        limit,
        offset: offset.current,
      });
      refHasMore.current = hasMore;

      offset.current += limit;
      // const a = [...data, ...hotComments];
      // console.log(data.concat(hotComments));
      setData((data) => [...data, ...hotComments]);
      // console.log(data); data 只能拿到空数组
    } catch (error) {
      console.log(error);
    }
  };

  useInfinite(handleInit, domScroll, domObserver);

  // if (loading) return <div>loading</div>;
  return (
    <div
      className="domComment px-8 py-5 overflow-auto max-h-full flex-auto"
      ref={domScroll}
    >
      <div className="h1">精彩评论</div>
      <div className="domComment_list">
        {data.map((item) => (
          <Comment
            item={item}
            // handleLike={handleLike}
            key={item.commentId}
          />
        ))}
        {refHasMore.current && (
          <div className="flex justify-center py-4">
            <Loading />
          </div>
        )}
        <div ref={domObserver} />
      </div>
    </div>
  );
});
