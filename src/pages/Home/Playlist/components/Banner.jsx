import React from 'react';
import { Link } from 'react-router-dom';

export default ({ item = {} }) => (
  <Link
    to="/"
    className="domHome_playlist_banner flex items-center relative overflow-hidden z-10"
  >
    <div
      className="absolute inset-0 bg-center"
      style={{
        backgroundImage: `url(${item.coverImgUrl})`,
        filter: 'blur(20px) grayscale(80%)',
        zIndex: '-1',
      }}
    />
    <div className="cover">
      <img src={item.coverImgUrl} alt="" />
    </div>
    <div className="contennt">
      <div className="tag border border-current rounded-full">精品歌单</div>
      <div className="text-white text-base mt-4">
        {item.name}
      </div>
      <div className="text-gray-300 mt-1">
        {item.copywriter}
      </div>
    </div>
  </Link>
);
