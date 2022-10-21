import { useGetMsgCommentsQuery } from "@/modules/services/message";
import React, { memo } from "react";
import Empty from "./Empty";
import Loading from "@/components/Loading";
import { useAppSelector } from "@/modules/hooks";
import { accountSelector } from "@/modules/reducers/account/slice";
const Comments = () => {
  const { uid } = useAppSelector(accountSelector);
  const { data, isLoading, isSuccess } = useGetMsgCommentsQuery({ uid });
  const { more, comments, total } = data;
  if (isLoading) return <Loading />;
  if (total === 0) return <Empty active={"评论"} />;
  return <Empty active={"评论"} />;
};

export default memo(Comments);
