import React, { useState, memo } from 'react';
import './style.scss';
import DomLook from '@/components/AdLookRectangle';

export default memo(() => {
  // console.log('look直播');
  const [size, setSize] = useState(20);
  const handleScroll = ({ target }) => {
    if (target.scrollTop + target.clientHeight + 200 > target.scrollHeight) {
      setSize(size + 20);
    }
  };
  return (
    <div className="domLook overflow-auto max-h-full flex-auto">
      <div className="domLook_header ui_header">
        <span className="title">LOOK直播</span>
        <span className="text-gray-400 slogan">在这里，看见音乐</span>
        <a href="https://look.163.com/hot" className="text-gray-400 more">更多 &gt;</a>
      </div>
      <div className="domLook_content">
        <div className="ui_grid rectangle_height col_4">
          {Object.keys(Array(20).fill(0)).map((item) => <DomLook tag key={item} />)}
        </div>
      </div>
    </div>
  );
});
