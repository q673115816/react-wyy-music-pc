import React, { memo, MouseEventHandler } from "react";

interface iRefreshProps {
  handleInit: MouseEventHandler;
}

export default memo(function Refresh({ handleInit }: iRefreshProps) {
  return (
    <div className="absolute bg-black bg-opacity-60 flex-center flex-col inset-0 mask text-white">
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
});
