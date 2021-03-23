import React, { useEffect, useState } from 'react';
import DomCommentsList from '@/components/CommentsList';
import DomWrite from '@/components/Write';
import { apiCommentPlaylist } from '@/api';

export default ({ id }) => {
  const [comments, setComments] = useState({});
  const handleInit = async () => {
    try {
      const comments = await apiCommentPlaylist({
        id,
      });
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div>
      {/* TODO */}
      <div className="mt-10 mb-10">
        <DomWrite />
      </div>
      <DomCommentsList comments={comments} />
    </div>
  );
};
