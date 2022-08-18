import React, { FC, memo } from "react";
import { filter, useGetMVAllQuery } from "@/modules/services/mv";
import Loading from "@/components/Loading";
import GridVideo from "@/components/GridVideo";

const Hot = () => {
  const { data, isLoading } = useGetMVAllQuery({ order: "最热", limit: 6 });
  if (isLoading) return <Loading />;
  return <GridVideo list={filter(data.data)} />;
};
export default memo(Hot);
