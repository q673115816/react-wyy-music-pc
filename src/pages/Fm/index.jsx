import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { apiPersonalfm, apiCommentMusic } from '@/api';
import DomCommentsList from '@/components/CommentsList';
import DomLoading from '@/components/Loading';
import { Link } from 'react-router-dom';

export default memo(() => {
  console.log('fm');
  const [data, setData] = useState([]);
  const [comments, setComment] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleInit = async () => {
    try {
      const { data } = await apiPersonalfm();
      const comments = await apiCommentMusic({
        id: data[0].id,
      });
      setData(data);
      setComment(comments);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  if (loading) return <div className="flex-center w-full h-full"><DomLoading /></div>;
  return (
    <div className="domFm m-auto overflow-auto h-full">
      <div className="m-auto" style={{ width: 760 }}>
        <div className="domFm_header pt-10 flex justify-between">
          <div>todo</div>
          <div style={{ width: 330 }}>
            <div className="font-bold text-lg">
              {data[0].name}
            </div>
            <div className="grid grid-cols-2">
              <span>
                专辑：
              </span>
              <span>
                歌手：
              </span>
            </div>
            <div style={{ height: 370 }} />
          </div>
        </div>
        <div className="domFm_main">
          <div>
            <Link to={`/comment/song/${data[0].id}`} className="font-bold text-base">评论</Link>
            <span className="text-gray-500">
              (已有
              {comments.total}
              条评论)
            </span>
          </div>
          <DomCommentsList comments={comments} more={data[0].id} type="song" />
        </div>
      </div>
    </div>
  );
});
