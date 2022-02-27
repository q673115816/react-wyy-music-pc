import IconRejected from "@/features/AI/Icon";
import React, { FC, memo } from "react";
import useToast from "@/hooks/useToast";

interface iProps {
  handleCallback: () => void;
}

const Rejected: FC<iProps> = ({ handleCallback }) => {
  const toast = useToast();
  return (
    <div className="flex flex-col items-center">
      <IconRejected />
      <div className="text-base">
        未识别出音乐，仅支持当前电脑正在播放的音乐
      </div>
      <button
        type="button"
        className="text-sm ui_theme_bg_color text-white py-2 px-6 rounded mt-4"
        onClick={handleCallback}
      >
        重新识别
      </button>
      <button
        type="button"
        className="mt-3 text-blue-400 text-sm"
        onClick={() => toast("反馈成功，感谢您的反馈")}
      >
        提交反馈
      </button>
    </div>
  );
};

export default memo(Rejected);
