import { Navigate, useParams } from "react-router-dom";
import React, { memo } from "react";
import { useGetSearchQuery } from "@/modules/services/search";
import Loading from "@/components/Loading";

const Redirect = () => {
  const { keywords = "" } = useParams();
  const { isLoading, data } = useGetSearchQuery({
    type: 1002,
    keywords,
    limit: 1,
    offset: 0,
  });
  if (isLoading) return <Loading />;

  const userprofiles = data.result.userprofiles || [];
  return <Navigate to={`/user/${userprofiles[0].userId}`} replace />;
};

export default memo(Redirect);
