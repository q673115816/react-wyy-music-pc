import React from "react";
import { maskSelector, setDialogReset } from "@/modules/reducers/mask/slice";
import QRCode from "qrcode.react";
import HOCDialog from "../Dialog/Dialog";
import style from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";

export default () => {
  const dispatch = useAppDispatch();
  const { contextMenuShareLink, dialogShareWXVisibility } =
    useAppSelector(maskSelector);
  if (!dialogShareWXVisibility) return null;
  return (
    <HOCDialog title="分享">
      <div className={style.content}>
        <div className="qr">
          <QRCode
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
          onClick={() => dispatch(setDialogReset())}
        >
          完成
        </button>
      </div>
    </HOCDialog>
  );
};
