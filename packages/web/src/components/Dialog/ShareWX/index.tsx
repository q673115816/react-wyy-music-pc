import React from "react";

import { QRCodeSVG } from "qrcode.react";
import HOCDialog from "../Dialog/Dialog";
import style from "./style.module.scss";
import { useMaskStore } from "@/stores";

export default () => {
  const { contextMenuShareLink, dialogShareWXVisibility } =
    useMaskStore();
  if (!dialogShareWXVisibility) return null;
  return (
    <HOCDialog title="分享">
      <div className={style.content}>
        <div className="qr">
          <QRCodeSVG
            size={110}
            level="H"
            value={contextMenuShareLink}
            title={contextMenuShareLink}
          />
          <div className={style.tips}>打开微信，扫一扫~</div>
        </div>
        <button
          type="button"
          className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red"
          onClick={() => useMaskStore.getState().setDialogReset()}
        >
          完成
        </button>
      </div>
    </HOCDialog>
  );
};
