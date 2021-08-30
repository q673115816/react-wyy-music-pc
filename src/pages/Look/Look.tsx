import React, {useState, memo, useRef} from 'react';
import DomLook from '@/components/AdLookRectangle';
import useInfinite from '@/hooks/useInfinite';
import {Link} from 'react-router-dom'
// import './style.scss';

export default memo(() => {
  const [size, setSize] = useState(20);
  const DomScroll = useRef(null);
  const DomObserver = useRef(null);
  useInfinite(() => { setSize((prev) => prev + 20); }, DomScroll, DomObserver);
  return (
    <div className="domLook overflow-auto max-h-full flex-auto" ref={DomScroll}>
      <div className="domLook_header ui_header">
        <span className="title h1">LOOK直播</span>
        <span className="text-gray-400 slogan ml-2">在这里，看见音乐</span>
        <Link to={({pathname}) => `${pathname}/my`} className="ml-2 py-1 px-2 rounded bg-red-500 text-white">我的直播</Link>
        <a href="https://look.163.com/hot" className="text-gray-400 ml-auto">更多 &gt;</a>
      </div>
      <div className="px-8">
        <div>{}</div>
        <div ref={DomObserver} />
      </div>
    </div>
  );
});
