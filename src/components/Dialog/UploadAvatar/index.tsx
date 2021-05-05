import React from 'react';
import { useSelector } from 'react-redux';
import HOCDialog from '../Dialog';
import './style.scss';

export default () => {
  const { dialogUploadAvatarVisibility, avatar } = useSelector(({ mask }) => mask);
  if (!dialogUploadAvatarVisibility) return null;
  console.log(avatar);
  return (
    <HOCDialog id="dialogUploadAvatar" title="上传头像">
      <div className="main">
        <div className="content flex justify-center">
          <div className="fullSize flex-center bg-black rounded overflow-hidden">
            {/* <span className="">请选择不超过5M的图片</span> */}
            <img className="w-full h-full object-contain" src={avatar} alt="" />
          </div>
          <div className="aside ml-8">
            <div className="bigSize border rounded w-24 h-24">
              <img src={avatar} alt="" />
            </div>
            <div className="text-gray-400 mt-1">大尺寸封面</div>
            <div className="smallSize border rounded w-16 h-16">
              <img src={avatar} alt="" />
            </div>
            <div className="text-gray-400 mt-1">小尺寸封面</div>
          </div>
        </div>
        <div className="actions pb-4 pt-6 space-x-4 flex justify-center">
          <button type="button" className="flex-center border px-3 h-8 rounded-full">重新选择</button>
          <button type="button" className="flex-center text-white ui_theme_bg_color px-3 h-8 rounded-full">保持并关闭</button>
        </div>
      </div>
    </HOCDialog>
  );
};
