import React, { memo } from "react";

import { Navigate } from "react-router";
import { useAccountStore } from "@/stores";

const Layout = () => {
  const { isLogin, profile } = useAccountStore();
  if (isLogin) {
    return <Navigate to={profile.userId} replace />;
  }
  return null;
};

export default memo(Layout);
