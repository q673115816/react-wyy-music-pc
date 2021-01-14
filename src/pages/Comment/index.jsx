import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiCommentMusic } from '@/api';

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleInit = async () => {
    try {
      const { } = await apiCommentMusic({
        id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domComment">
      <div className="domComment_header">{}</div>
      <div className="domComment_main">{}</div>
    </div>
  );
};
