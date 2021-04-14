import React from 'react';
import { useSelector } from 'react-redux';
import HOCDialog from '../Dialog';
import './style.scss';

export default () => {
  const { dialogUploadAvatarVisibility } = useSelector(({ mask }) => mask);
  if (!dialogUploadAvatarVisibility) return null;
  return (
    <HOCDialog id="dialogUploadAvatar" title="上传头像">
      <div className="main">
        <div className="content">
          <div className="fullSize flex-center">
            <span className="ui_red">请选择不超过5M的图片</span>
            <img src="" alt="" />
          </div>
          <div className="aside">
            <div className="bigSize">
              img
            </div>
            <div className="text-gray-400">大尺寸封面</div>
            <div className="smallSize">
              <img src="" alt="" />
            </div>
            <div className="text-gray-400">小尺寸封面</div>
          </div>
        </div>
        <div className="actions">
          <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full">重新选择</button>
          &nbsp;
          &nbsp;
          <button type="button" className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red">保持并关闭</button>
        </div>
      </div>
    </HOCDialog>
  );
};
