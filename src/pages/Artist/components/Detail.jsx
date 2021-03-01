import React, { useEffect, useState } from 'react';
import { apiArtistDesc } from '@/api';

export default ({ id }) => {
  const [desc, setDesc] = useState({});
  const handleInit = async () => {
    try {
      const desc = await apiArtistDesc({
        id,
      });
      setDesc(desc);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domArtist_section">
      <div className="domArtist_subtitle select-text">
        简介
      </div>
      <div className="domArtist_article text-gray-500 select-text">
        {desc.briefDesc}
      </div>
      <br />
      <br />
      {
        desc.introduction?.map((introduction) => (
          <div key={introduction.ti} className="select-text">
            <div className="domArtist_subtitle">
              {introduction.ti}
            </div>
            <div className="domArtist_article text-gray-500 whitespace-pre-line">
              {introduction.txt}
            </div>
          </div>
        ))
      }
    </div>
  );
};
