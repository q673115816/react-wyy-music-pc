import { IconScan } from "@tabler/icons";
import React, { FC, memo, MouseEventHandler } from "react";

interface iWaitProps {
  qrimg: string;
  handleChooseOtherSign: MouseEventHandler;
}

const Wait: FC<iWaitProps> = ({ qrimg, handleChooseOtherSign, children }) => (
  <div className="scanwait text-center">
    <div className="qrbox relative">
      <div className="left">
        <div className="ico ui_themeColor flex-center">
          <IconScan size={64} />
        </div>
      </div>
      <div className="right">
        <div className="qrimg relative m-auto">
          <img src={qrimg} alt="" />
          {children}
        </div>
        <div className="tips text-sm mt-4">
          使用
          <a href="https://music.163.com/#/download" className="ui_link">
            网易云音乐APP
          </a>
          扫码登录
        </div>
      </div>
    </div>
    <button type="button" onClick={handleChooseOtherSign}>
      选择其他登录模式&nbsp;&gt;
    </button>
  </div>
);

export default memo(Wait);
