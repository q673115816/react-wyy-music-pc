import React, { memo } from "react";
import { IconFileImport } from "@tabler/icons";
import "./style.scss";
import Speech from "./Speech";
import { useToggle } from "react-use";
import useToast from "@/hooks/useToast";
import Wait from "./Wait";
import Rejected from "./Rejected";

export default memo(function AI() {
  const toast = useToast();
  const [listen, toggleListen] = useToggle(true);
  /**
   * 应该不会有成功吧？
   * TODO
   * speech
   */
  return (
    <div className="py-5 px-8 flex flex-col h-full relative">
      <Speech />
      <div className="domAi_header flex items-baseline">
        <div className="h1">听歌识曲</div>
        <button
          type="button"
          className="ml-auto flex items-center"
          onClick={() => toast("创建【听歌识曲】图标至桌面成功")}
        >
          <IconFileImport size={16} stroke={1} />
          创建桌面快捷方式
        </button>
      </div>
      <div className="flex-auto flex-center">
        {listen ? (
          <Wait handleCallback={toggleListen} />
        ) : (
          <Rejected handleCallback={toggleListen} />
        )}
      </div>
    </div>
  );
});
