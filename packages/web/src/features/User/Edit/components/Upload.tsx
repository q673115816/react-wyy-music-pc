import React, { ChangeEventHandler, memo } from "react";
import DialogUploadAvatar from "@/components/Dialog/UploadAvatar";
import { setDialogUploadAvatarShow } from "@/modules/reducers/mask/slice";
import { useAppDispatch } from "@/modules/hooks";

const Upload = () => {
  const dispatch = useAppDispatch();
  const handleUpload: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const reader = new FileReader();
    const file = target.files?.[0];
    if (!file) return;
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      dispatch(
        setDialogUploadAvatarShow({
          avatar: event.target.result,
        })
      );
    };
  };
  return (
    <>
      <label
        htmlFor="avatar"
        className="border cursor-pointer hover:bg-gray-50 flex-center h-8 m-auto mt-5 px-3 rounded-full update w-min whitespace-nowrap"
      >
        <input
          onChange={handleUpload}
          type="file"
          name=""
          id="avatar"
          hidden
          accept="image/bmp,image/gif,image/jpg,image/svg,image/png,image/webp,image/ico,image/svgz,image/tif,image/jpeg,image/jfif,image/pjpeg,image/pjp,image/tiff,image/xbm"
        />
        修改头像
      </label>
      <DialogUploadAvatar />
    </>
  );
};

export default memo(Upload);
