import React, { memo, useMemo } from "react";
import GridVideo from "@/components/GridVideo";
import Empty from "@/features/Sublist/components/Empty";
import Loading from "@/components/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import useInit from "@/features/Sublist/useInit";
import { useGetMVSubListQuery } from "@/modules/services/sublist";

const MV = () => {
  const { pathname } = useLocation();
  const path = pathname.slice(9);
  // const { isLoading, count, search, setSearch, filter } = useInit(path);
  const { data, isLoading } = useGetMVSubListQuery();
  const count = data?.count || 0;
  const navigate = useNavigate();
  const filter = data?.data || [];
  const memoFilter = useMemo(
    () =>
      filter.map(
        ({ vid, coverUrl, playTime, durationms, title, type, creator }) => ({
          id: vid,
          cover: coverUrl,
          playCount: playTime,
          duration: durationms,
          title,
          type,
          creator,
        })
      ),
    [filter]
  );
  if (isLoading) {
    return (
      <div className={`flex-center`}>
        <Loading />
      </div>
    );
  }
  // if (count === 0) {
  //   return <Empty count={count} search={search} path={path} />;
  // }

  return (
    <div className="px-8 pt-8">
      <GridVideo list={memoFilter} />
    </div>
  );
};

export default memo(MV);
