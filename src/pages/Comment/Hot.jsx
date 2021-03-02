import React, {
  useState, useEffect, useRef, memo,
} from 'react';
import { useParams } from 'react-router-dom';
import { apiCommentHot, apiCommentLike } from '@/api';
import DomComment from '@/components/Comment';
import useInfinite from '@/custom/useInfinite';
import DomLoading from '@/components/Loading';

export default memo(() => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const refHasMore = useRef(true);
  const offset = useRef(0);
  const domObserver = useRef();
  const domScroll = useRef();
  const limit = 20;

  const handleLike = async (cid, t) => {
    try {
      const { code } = await apiCommentLike({
        id,
        cid,
        t: t ? 1 : 0,
        type: 0,
      });
      if (code === 200) {
        setData(data.map((item) => {
          if (item.commentId === cid) {
            item.liked = t;
            item.likedCount += t ? 1 : -1;
          }
          return item;
        }));
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

  const {
    handleIo,
    handleUnIo,
  } = useInfinite(handleInit, domScroll, domObserver);

  useEffect(() => {
    handleIo();
    return () => {
      handleUnIo();
    };
  }, []);

  // if (loading) return <div>loading</div>;
  return (
    <div className="domComment overflow-auto max-h-full flex-auto" ref={domScroll}>
      <div className="h1">精彩评论</div>
      <div className="domComment_list">
        <div className="font-bold">精彩评论</div>
        {data.map((item) => (
          <DomComment
            item={item}
            handleLike={handleLike}
            key={item.commentId}
          />
        ))}
        {
          refHasMore.current
          && <div className="flex justify-center py-4"><DomLoading /></div>
        }
        <div ref={domObserver} />
      </div>
    </div>
  );
});
