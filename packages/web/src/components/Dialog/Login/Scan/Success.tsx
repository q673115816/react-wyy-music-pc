import React, { memo } from "react";
import { IconFaceId } from "@tabler/icons";

const Success = () => {
  return (
    <div className="flex-center flex-col">
      <div className="flex-center ui_themeColor my-10">
        <IconFaceId size={64} stroke="1" />
      </div>
      <span className="text-gray-400 text-sm">扫描成功</span>
      <div className="text-base mt-4">请在手机上确认登录</div>
    </div>
  );
};

export default memo(Success);
