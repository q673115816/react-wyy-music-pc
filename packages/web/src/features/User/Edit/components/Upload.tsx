import React, { ChangeEventHandler, memo, useState } from "react";
import DialogUploadAvatar from "@/components/Dialog/UploadAvatar";

const Upload = () => {
  const [file, setFile] = useState();
  const handleUpload: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setFile(target.files?.[0]);
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
          id="avatar"
          hidden
          accept="image/*"
        />
        修改头像
      </label>
      {file && <DialogUploadAvatar handleUpload={handleUpload} file={file} />}
    </>
  );
};

export default memo(Upload);
