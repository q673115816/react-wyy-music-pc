import { useGetMsgForwardsQuery } from "@/modules/services/message";
import React, { memo } from "react";
import Empty from "./Empty";
import Loading from "@/components/Loading";
const Forwards = () => {
  const { data, isLoading, isSuccess } = useGetMsgForwardsQuery();
  const { forwards } = data;
  if (isLoading) return <Loading />;
  if (forwards.length === 0) return <Empty active={"@我"} />;
  return <Empty active={"@我"} />;
};

export default memo(Forwards);
