import { useGetMsgNoticesQuery } from "@/modules/services/message";
import React, { memo } from "react";
import Empty from "./Empty";
import Loading from "@/components/Loading";

const Notices = () => {
  const { data, isLoading, isSuccess } = useGetMsgNoticesQuery();
  const { notices } = data;
  if (isLoading) return <Loading />;
  if (notices.length === 0) return <Empty active={"通知"} />;
  return <Empty active={"通知"} />;
};

export default memo(Notices);
