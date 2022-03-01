import React, { FC, memo, MouseEventHandler } from "react";

interface iProps {
  handleInit: MouseEventHandler;
}

const Refresh: FC<iProps> = ({ handleInit }) => {
  return (
    <div className="absolute bg-black bg-opacity-60 flex-center flex-col inset-0 text-white">
      <div>二维码已失效</div>
      <button
        type="button"
        className="btn w-20 h-8 rounded mt-2 bg-blue-500"
        onClick={handleInit}
      >
        点击刷新
      </button>
    </div>
  );
};

export default memo(Refresh);
