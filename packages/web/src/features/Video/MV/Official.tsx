import React, { memo } from "react";
import { useGetMVExclusiveRcmdQuery, filter } from "@/modules/services/mv";
import Loading from "@/components/Loading";
import GridVideo from "@/components/GridVideo";

const Official = () => {
  const { data, isLoading } = useGetMVExclusiveRcmdQuery({ limit: 6 });
  if (isLoading) return <Loading />;
  return <GridVideo list={filter(data.data)} />;
};
export default memo(Official);
