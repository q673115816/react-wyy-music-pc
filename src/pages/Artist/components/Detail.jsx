import React, { useEffect, useState } from 'react';
import { apiArtistDetail } from '@/api';

export default ({ id }) => {
  const [detail, setDetail] = useState({});
  const handleInit = async () => {
    try {
      const { data } = await apiArtistDetail({
        id,
      });
      setDetail(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domArtist_section">
      <div className="domArtist_subtitle ui_select">
        {detail.artist?.name}
        简介
      </div>
      <div className="domArtist_article text-gray-400 ui_select">
        {detail.artist?.briefDesc}
      </div>
      <br />
      <br />
      <br />
      <div className="domArtist_subtitle ui_select">简历</div>
    </div>
  );
};
