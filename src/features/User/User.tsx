import React, { createContext, memo } from "react";
import { Outlet, useParams } from "react-router-dom";
import "./style.scss";
import { useGetUserDetailQuery } from "@/modules/services/user";
import { Provider } from "./context";

const User = () => {
  const { uid } = useParams();
  const { data, isLoading } = useGetUserDetailQuery({
    uid: uid as string,
  });
  return (
    <div className="overflow-auto h-full flex-auto">
      <Provider value={{ ...data }}>
        <Outlet />
      </Provider>
    </div>
  );
};

export default memo(User);
