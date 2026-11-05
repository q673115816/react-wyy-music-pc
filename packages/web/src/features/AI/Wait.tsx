import React, { FC, memo, useEffect, useState } from "react";
import { IconMicrophone } from "@tabler/icons-react";

interface iProps {
  handleCallback: () => void;
}

const Wait: FC<iProps> = ({ handleCallback }) => {
  const [time, setTime] = useState(15);
  useEffect(() => {
    const timer = setInterval(() => setTime((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (time === 0) handleCallback();
  }, [time]);

  return (
    <div className="flex flex-col items-center">
      <div id="ai_work" className="p-32 relative">
        <div className="flex-center rounded-full text-white bg-red-500 w-32 h-32">
          <IconMicrophone size={64} />
        </div>
      </div>
      <div>
        {time % 2 === 0 || time % 3 === 0 || time % 5 === 0
          ? "外部声源无法识别"
          : "正在识别电脑中正在播放的音乐"}
        {`(${time}s)`}
      </div>
      <button
        type="button"
        className="mt-4 text-base hover:bg-gray-100 rounded border h-10 w-28"
        onClick={handleCallback}
      >
        停止识别
      </button>
    </div>
  );
};

export default memo(Wait);
