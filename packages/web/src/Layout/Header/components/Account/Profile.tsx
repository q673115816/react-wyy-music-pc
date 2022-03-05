import React, { FC, memo, MouseEventHandler } from "react";
import { useAppSelector } from "@/modules/hooks";
import Content from "./Content";

const Profile: FC<{ handleHide: MouseEventHandler }> = ({ handleHide }) => {
  const { profile } = useAppSelector(({ account }) => account);
  return (
    <div className="w-64 bg-white text-black z-20 absolute top-full left-1/2 transform -translate-x-1/2 shadow rounded">
      <Content uid={profile.userId} handleHide={handleHide} />
    </div>
  );
};

export default memo(Profile);
