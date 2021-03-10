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
    <div className="lyric">
      <div className="content">
        {lyrics
          .slice(0, status ? Infinity : 4)
          .map((lyric) => <div dangerouslySetInnerHTML={{ __html: lyric }} />)}
      </div>
      <div className="actions">
        <div className="top">
          <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full" onClick={() => SetStatus(!status)}>
            {status ? '收起' : '展开'}
            歌词
          </button>
          <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full clip" onClick={handleClip}>复制歌词</button>
        </div>
        {status
          && (
            <div className="button">
              <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full" onClick={() => SetStatus(false)}>收起歌词</button>
              <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full clip" onClick={handleClip}>复制歌词</button>
            </div>
          )}
      </div>
    </div>
  );
};
