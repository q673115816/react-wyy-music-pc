import React, { useRef } from 'react';

export default () => {
  // const [data, setData] = useState([]);
  const time = useRef(15);
  return (
    <div className="domAi">
      <div className="h1">{}</div>
      <div className="domAi_main">
        倒计时
        {time}
      </div>
    </div>
  );
};
