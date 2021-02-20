import React from 'react';
import { setDialogReset } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import QRcode from 'qrcode.react';
import HOCDialog from '../Dialog';
import './style.scss';

const ShareWX = () => {
  const dispatch = useDispatch();
  const { contextMenuShareLink } = useSelector(({ mask }) => mask);
  return (
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
      <button type="button" className="ui_btn red" onClick={() => dispatch(setDialogReset())}>完成</button>
    </div>
  );
};

export default HOCDialog(ShareWX, 'dialogShareWX', '分享');
