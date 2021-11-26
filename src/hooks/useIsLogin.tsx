import React, { useEffect } from "react";
import { apiLoginStatus } from "@/api";
import { setIsLogin } from "@/reducers/common/slice";
import { useDispatch } from "react-redux";

export default () => {
  // const [isLogin, setIsLogin] = useState(false);
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
