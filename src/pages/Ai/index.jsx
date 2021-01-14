import React, { useRef } from 'react';
import './style.scss';

export default () => {
  // const [data, setData] = useState([]);
  const time = useRef(15);
  return (
    <div className="domAi">
      <div className="domAi_header">
        <div className="h1">听歌识曲</div>
        <span>创建桌面快捷方式</span>
      </div>
      <div className="domAi_main">
        倒计时
      </div>
    </div>
  );
};
