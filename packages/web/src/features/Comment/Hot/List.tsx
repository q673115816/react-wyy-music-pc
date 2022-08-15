import React, { FC, memo, useEffect, useRef } from "react";
import Comment from "@/components/Comments/Comment";
import { useLazyGetCommentHotQuery } from "@/modules/services/comment";
import { useParams } from "react-router-dom";
import { useIntersection } from "react-use";
import Loading from "@/components/Loading";

export interface iProps {
  index: number;
  setHasMore: () => void;
}

const List: FC<iProps> = ({ index, setHasMore }) => {
  const { id } = useParams();
  const limit = 20;
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  // const handleLike = async (cid, t) => {
  //   try {
  //     const { code } = await apiCommentLike({
  //       id,
  //       cid,
  //       t: t ? 0 : 1,
  //       type: 0,
  //     });
  //     if (code === 200) {
  //       setData((draft) => {
  //         draft.forEach((item) => {
  //           if (item.commentId === cid) {
  //             item.liked = !t;
  //             item.likedCount += t ? -1 : 1;
  //           }
  //         });
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [trigger, { data, isSuccess, isFetching, isUninitialized }] =
    useLazyGetCommentHotQuery();
  useEffect(() => {
    if (isUninitialized && intersection && intersection.intersectionRatio > 0) {
      trigger({
        id,
        type: 0,
        limit,
        offset: index * limit,
      });
    }
  }, [intersection]);
  useEffect(() => {
    if (data?.hasMore) setHasMore();
  }, [data]);
  return (
    <div ref={intersectionRef}>
      {!isSuccess ? (
        <div className="flex-center py-4">
          <Loading />
        </div>
      ) : (
        data.hotComments.map((item) => (
          <Comment
            item={item}
            // handleLike={handleLike}
            key={item.commentId}
          />
        ))
      )}
    </div>
  );
};

export default memo(List);
