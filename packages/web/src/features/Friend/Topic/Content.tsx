import React, { FC, memo } from "react";
import { useGetTopicDetailEventHotQuery } from "@/modules/services/friend";
import Dynamic from "@/components/Dynamic";
import Loading from "@/components/Loading";

interface iProps {
  actid: string;
}

const Content: FC<iProps> = ({ actid }) => {
  const { data, isLoading } = useGetTopicDetailEventHotQuery({ actid });
  const list = data?.events || [];
  if (isLoading) return <Loading />;
  return <Dynamic list={list} />;
};

export default memo(Content);
