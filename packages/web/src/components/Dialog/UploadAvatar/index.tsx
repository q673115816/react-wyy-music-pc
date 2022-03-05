import React, { memo, useEffect, useLayoutEffect, useRef } from "react";
import HOCDialog from "../Dialog";
import "./style.scss";
import { useAppSelector } from "@/modules/hooks";

const UploadAvatar = () => {
  const { dialogUploadAvatarVisibility, avatar } = useAppSelector(
    ({ mask }) => mask
  );

  const RefCanvas = useRef<HTMLCanvasElement>(null);
  const RefCover = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = RefCanvas.current;
    if (!canvas) return;
    const { width, height } = canvas;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const img = new Image();
    img.src = avatar;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
    };
  }, [avatar]);
  if (!dialogUploadAvatarVisibility) return null;
  return (
    <HOCDialog id="dialogUploadAvatar" title="上传头像">
      <div className="">
        <div className="flex justify-center">
          <div className="relative bg-black rounded overflow-hidden">
            {/* <span className="">请选择不超过5M的图片</span> */}
            {/*<img className="w-full h-full object-contain" src={avatar} alt="" />*/}
            <canvas
              className={`w-full h-full`}
              width={224}
              height={224}
              ref={RefCanvas}
            />
            <canvas className={`absolute inset-0`} ref={RefCover} />
          </div>
          <div className="ml-8">
            <div className="border rounded w-24 h-24">
              <img src={avatar} alt="" />
            </div>
            <div className="text-gray-400 mt-1">大尺寸封面</div>
            <div className="border rounded w-16 h-16">
              <img src={avatar} alt="" />
            </div>
            <div className="text-gray-400 mt-1">小尺寸封面</div>
          </div>
        </div>
        <div className="pb-4 pt-6 space-x-4 flex justify-center">
          <button
            type="button"
            className="flex-center border px-3 h-8 rounded-full"
          >
            重新选择
          </button>
          <button
            type="button"
            className="flex-center text-white ui_theme_bg_color px-3 h-8 rounded-full"
          >
            保持并关闭
          </button>
        </div>
      </div>
    </HOCDialog>
  );
};
export default memo(UploadAvatar);
