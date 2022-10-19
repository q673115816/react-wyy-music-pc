import React from "react";
import { useLocalStorage } from "react-use";

const useToken = (key = "cookie") => {
  const [token, setToken, removeToken] = useLocalStorage(key);
  return {
    token,
    setToken,
    removeToken,
  };
};

export default useToken;
