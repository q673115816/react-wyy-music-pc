import React, { useEffect } from 'react';
import { apiDjDetail } from '@/api';
import { useParams } from 'react-router-dom';

export default () => {
  const { id } = useParams();
  const handleInit = async () => {
    try {
      const { } = await apiDjDetail({
        rid: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domPlaylistDetail">
      <div className="domPlaylistDetail_header">{}</div>
      <div className="domPlaylistDetail_main">TODO</div>
    </div>
  );
};
