import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useGetLoginStatusQuery } from "@/modules/services/account";

const useLoginStatus = () => {
  const { data, isSuccess } = useGetLoginStatusQuery();
  const navigate = useNavigate();
  const profile = data?.data?.profile;
  useEffect(() => {
    if (isSuccess && !profile) navigate("/", { replace: true });
  }, [profile, isSuccess]);
};

export default useLoginStatus;
