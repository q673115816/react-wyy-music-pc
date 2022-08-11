import React, { useEffect } from "react";
import { apiLoginStatus } from "@/api";
import { useDispatch } from "react-redux";

const useIsLogin = () => {
  const dispatch = useDispatch();
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
