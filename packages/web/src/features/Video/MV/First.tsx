import React, { FC, memo } from "react";
import { filter, useGetMVFirstQuery } from "@/modules/services/mv";
import Loading from "@/components/Loading";
import GridVideo from "@/components/GridVideo";

interface iProps {
  area: string;
}

const First: FC<iProps> = ({ area }) => {
  const { data, isLoading } = useGetMVFirstQuery({ area, limit: 6 });
  if (isLoading) return <Loading />;
  return <GridVideo list={filter(data.data)} />;
};
export default memo(First);
