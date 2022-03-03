import React, { memo } from "react";
import {
  useGetDailySignInMutation,
  useGetSignInProgressQuery,
} from "@/modules/services/user";
import { IconCoin } from "@tabler/icons";
import Loading from "@/components/Loading";

const SignIn = () => {
  const { data, isLoading } = useGetSignInProgressQuery({});
  const [dailySignInGet] = useGetDailySignInMutation();

  const handleCheckIn = async () => {
    try {
      const {} = await dailySignInGet();
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return <Loading />;
  if (data.data.today.todaySignedIn) {
    return (
      <button
        type="button"
        className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full text-sm"
      >
        <IconCoin size={16} stroke={1} />
        &nbsp; 已签到
      </button>
    );
  }
  return (
    <button
      type="button"
      className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full text-sm"
      onClick={handleCheckIn}
    >
      <IconCoin size={16} stroke={1} />
      &nbsp; 签到
    </button>
  );
};

export default memo(SignIn);
