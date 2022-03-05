import React from "react";
import { setDialogReset } from "@/modules/reducers/mask/slice";
import { useDispatch, useSelector } from "react-redux";
import QRcode from "qrcode.react";
import HOCDialog from "../Dialog/Dialog";
import "./style.scss";

export default () => {
  const dispatch = useDispatch();
  const { contextMenuShareLink, dialogShareWXVisibility } = useSelector(
    ({ mask }) => mask
  );
  if (!dialogShareWXVisibility) return null;
  return (
    <HOCDialog id="dialogShareWX" title="分享">
      <div className="content">
        <div className="qr">
          <QRcode
            size={110}
            level="H"
            value={contextMenuShareLink}
            title={contextMenuShareLink}
          />
          <div className="tips">打开微信，扫一扫~</div>
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
