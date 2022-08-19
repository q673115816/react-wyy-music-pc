import React, { memo } from "react";
import { useAppSelector } from "@/modules/hooks";
import { accountSelector } from "@/modules/reducers/account/slice";
import { Navigate } from "react-router-dom";

const Layout = () => {
  const { isLogin, profile } = useAppSelector(accountSelector);
  if (isLogin) {
    return <Navigate to={profile.userId} replace />;
  }
  return null;
};

export default memo(Layout);
