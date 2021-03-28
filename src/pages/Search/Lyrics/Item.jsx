import React, { useEffect, useRef, useState } from 'react';

export default ({ lyrics = [] }) => {
  const content = useRef();
  const [status, SetStatus] = useState(false);
  useEffect(() => {
    content.current = lyrics.join('\n').replace(/<b>|<\/b>/gm, '');
  }, [lyrics]);
  const handleClip = () => {
    const input = document.createElement('textarea');
    input.setAttribute('readonly', 'readonly');
    input.textContent = content.current;
    document.body.appendChild(input);
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      console.log('复制成功');
    }
    document.body.removeChild(input);
  };
  return (
    <div className="lrc flex pb-2">
      <div className="content w-2/3 px-2 text-gray-500">
        {lyrics
          .slice(0, status ? Infinity : 4)
          .map((lrc, index) => <div key={lrc + index} dangerouslySetInnerHTML={{ __html: lrc }} />)}
      </div>
      <div className="actions w-1/3 flex flex-col justify-between">
        <div className="flex space-x-2.5">
          <button
            type="button"
            className="flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full"
            onClick={() => SetStatus(!status)}
          >
            {status ? '收起' : '展开'}
            歌词
          </button>
          <button
            type="button"
            className="flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip"
            onClick={handleClip}
          >
            复制歌词
          </button>
        </div>
        {status
          && (
            <div className="flex space-x-2.5">
              <button
                type="button"
                className="flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full"
                onClick={() => SetStatus(false)}
              >
                收起歌词
              </button>
              <button
                type="button"
                className="flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip"
                onClick={handleClip}
              >
                复制歌词
              </button>
            </div>
          )}
      </div>
    </div>
  );
};
