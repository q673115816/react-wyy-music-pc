import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiLoginStatus } from "@/api";

export const handleLoginStatus = async (callback: any) => {
  try {
    const {
      data: { profile },
    } = await apiLoginStatus();
    callback && callback(profile);
  } catch (error) {
    console.log(error);
  }
};

export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    handleLoginStatus((profile: any) => {
      if (!profile) navigate("/", { replace: true });
    });
  }, []);
};
