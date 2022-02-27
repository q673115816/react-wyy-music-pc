import React, { useEffect } from "react";
import { apiLoginStatus } from "@/api";
import { setIsLogin } from "@/modules/reducers/common/slice";
import { useDispatch } from "react-redux";

const useIsLogin = () => {
  const dispatch = useDispatch();
  const handleCheck = async () => {
    try {
      const {
        data: { profile },
      } = await apiLoginStatus();
      setIsLogin(!!profile);
      const isLogin = !!profile;
      if (isLogin) {
        dispatch(setIsLogin(isLogin));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleCheck();
  }, []);
};

export default useIsLogin;
