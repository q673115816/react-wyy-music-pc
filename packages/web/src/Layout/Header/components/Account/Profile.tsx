import React, { FC, memo, MouseEventHandler } from "react";
import Content from "./Content";
import { useAccountStore } from "@/stores";

const Profile: FC<{ handleHide: MouseEventHandler }> = ({ handleHide }) => {
  const { profile } = useAccountStore();
  return (
    <div className="w-64 bg-white text-black z-20 absolute top-full left-1/2 transform -translate-x-1/2 shadow rounded">
      <Content uid={profile.userId} handleHide={handleHide} />
    </div>
  );
};

export default memo(Profile);
