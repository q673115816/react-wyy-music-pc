import React, { FC, memo } from "react";
import { filter, useGetTopMVQuery } from "@/modules/services/mv";
import Loading from "@/components/Loading";
import GridMVToplist from "@/components/GridMVToplist/GridMVToplist";

interface iProps {
  area: string;
}

const Rank: FC<iProps> = ({ area }) => {
  const { data, isLoading } = useGetTopMVQuery({ area, limit: 6 });
  if (isLoading) return <Loading />;
  return (
    <GridMVToplist
      list={data.data}
      schema={[
        ["评论", "播放"],
        ["收藏", "分享", "下载MV", "复制链接"],
      ]}
    />
  );
};
export default memo(Rank);
