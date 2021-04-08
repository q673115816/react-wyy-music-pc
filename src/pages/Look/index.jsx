import React, { useState, memo, useRef } from 'react';
import DomLook from '@/components/AdLookRectangle';
import useInfinite from '@/custom/useInfinite';
// import './style.scss';

export default memo(() => {
  const [size, setSize] = useState(20);
  const DomScroll = useRef();
  const DomObserver = useRef();
  useInfinite(() => { setSize((prev) => prev + 20); }, DomScroll, DomObserver);
  return (
    <div className="domLook overflow-auto max-h-full flex-auto" ref={DomScroll}>
      <div className="domLook_header ui_header">
        <span className="title h1">LOOK直播</span>
        <span className="text-gray-400 slogan ml-2">在这里，看见音乐</span>
        <a href="https://look.163.com/hot" className="text-gray-400 ml-auto">更多 &gt;</a>
      </div>
      <div className="domLook_content px-8">
        <div className="grid grid-cols-4 gap-5">
          {Object.keys([...Array(size)]).map((item) => <DomLook tag key={item} />)}
        </div>
        <div ref={DomObserver} />
      </div>
    </div>
  );
});
