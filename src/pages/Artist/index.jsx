import React, { useEffect, useState } from 'react';
import { apiArtistDetail } from '@/api';
import { useParams } from 'react-router-dom';
import './style.scss';

export default () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const handleInit = async () => {
    try {
      const { data } = await apiArtistDetail({
        id,
      });
      setDetail(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInit();
  }, []);
  if (loading) return <div>loading</div>;
  return (
    <div className="domArtist overflow-auto">
      <div className="domArtist_header">
        <div className="avatar">
          <img src={`${detail.artist.cover}?param=200y200`} alt="" />
        </div>
        <div className="content">
          <div className="name h1">{detail.artist.name}</div>
        </div>
      </div>
    </div>
  );
};
