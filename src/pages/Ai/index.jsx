import React, { useRef, useState, memo } from 'react';
import './style.scss';

export default memo(() => {
  console.log('ai');
  const [status, setStatus] = useState('rejected');
  const time = useRef(15);
  return (
    <div className="domAi flex flex-col h-full">
      <div className="domAi_header flex justify-between items-baseline">
        <div className="h1">听歌识曲</div>
        <button tyoe="button" onClick={() => alert('创建【听歌识曲】至桌面成功')}>创建桌面快捷方式</button>
      </div>
      <div className="flex-auto domAi_main flex items-center justify-center">
        {
          status === 'wait'
          && (
          <div>
            倒计时
          </div>
          )
        }
        {
          status === 'rejected'
        && (
        <div className="flex flex-col items-center">
          <div className="text-base">
            未识别出音乐，仅支持当前电脑正在播放的音乐
          </div>
          <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded mt-4">
            重新识别
          </button>
          <button
            type="button"
            className="mt-3 text-blue-500 text-sm"
            onClick={() => alert('反馈成功，感谢您的反馈')}
          >
            提交反馈
          </button>
        </div>
        )
        }
      </div>
    </div>
  );
});
