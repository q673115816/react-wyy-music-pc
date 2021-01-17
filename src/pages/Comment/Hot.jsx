import React, {
  useState, useEffect, useRef, useLayoutEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import { apiCommentHot, apiCommentLike } from '@/api';
import DomComment from '@/components/Comment';

export default () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const offset = useRef(0);
  const observer = useRef();
  const domHot = useRef();
  const io = useRef();

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
    try {
      const { hotComments } = await apiCommentHot({
        id,
        type: 0,
        offset: offset.current * 20,
      });
      // const a = [...data, ...hotComments];
      // console.log(data.concat(hotComments));
      setData((data) => [...data, ...hotComments]);
      // console.log(data); data 只能拿到空数组
    } catch (error) {
      console.log(error);
    }
  };

  const handleIo = () => {
    io.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleInit();
          offset.current += 1;
        }
      });
    }, {
      // threshold: [1],
      target: domHot.current,
      // rootMargin: '200px 0px 0px 0px',// isIntersecting就不顶用了吧
    });
    io.current.observe(observer.current);
  };

  const handleUninstallIo = () => {
    io.current.disconnect();
  };

  useEffect(() => {
    handleIo();
    return () => {
      handleUninstallIo();
    };
  }, []);

  // if (loading) return <div>loading</div>;
  return (
    <div className="domComment overflow-auto" ref={domHot}>
      <div className="h1">精彩评论</div>
      <div className="domComment_list">
        <div className="ui_bold">精彩评论</div>
        {data.map((item) => (
          <DomComment
            item={item}
            handleLike={handleLike}
            key={item.commentId}
          />
        ))}
        <div ref={observer} />
      </div>
    </div>
  );
};
