import React, { useEffect } from "react";
import { apiLoginStatus } from "@/api";
import { useAppDispatch } from "@/modules/hooks";

const useIsLogin = () => {
  const dispatch = useAppDispatch();
  const handleCheck = async () => {
    try {
      const {
        data: { profile },
      } = await apiLoginStatus();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleCheck();
  }, []);
};

export default useIsLogin;
