import React, { memo, useEffect, useState } from 'react';
import { apiArtistDesc } from '@/api';

export default memo(({ id }) => {
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
    <div className="domArtist_section p-8 leading-8 text-sm select-text">
      <div className="domArtist_subtitle font-bold">
        简介
      </div>
      <div className="domArtist_article text-gray-500" style={{ textIndent: '2em' }}>
        {desc.briefDesc}
      </div>
      <br />
      <br />
      {
        desc.introduction?.map((introduction) => (
          <div key={introduction.ti} className="select-text">
            <div className="domArtist_subtitle font-bold">
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
});
