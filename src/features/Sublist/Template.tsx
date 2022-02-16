import { useParams } from "react-router-dom";
import Empty from "@/features/Sublist/components/Empty";
import React, { FC, memo } from "react";

interface iProps {
  list: [];
  count: number;
  search: string;
}

const Template: FC<iProps> = ({ list, count, children, search }) => {
  const { path = "" } = useParams();
  if (list.length !== 0) return { children };
  if (count === 0) return <Empty tips={`暂无收藏${path}`} />;
  return <Empty tips={`未能找到与“${search}”相关的任何${path}`} />;
};

export default memo(Template);
