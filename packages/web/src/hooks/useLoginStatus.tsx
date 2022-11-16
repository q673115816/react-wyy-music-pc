import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetLoginStatusQuery } from "@/modules/services/account";

const useLoginStatus = () => {
  const { data, isSuccess, isFetching, isLoading } = useGetLoginStatusQuery();
  const navigate = useNavigate();
  if (isLoading) return;
  const profile = data?.data?.profile;
  console.log("profile", profile);
  if (!profile) navigate("/", { replace: true });
};

export default useLoginStatus;
