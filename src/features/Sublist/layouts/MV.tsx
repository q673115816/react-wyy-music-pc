import React, { FC, memo, useMemo } from "react";
import GridVideo from "@/components/GridVideo";
import useInit from "@/features/Sublist/useInit";
import { useGetMVSubListQuery } from "@/modules/services/sublist";
import HeaderBar from "@/features/Sublist/components/HeaderBar";

const filterRule = (data, search) =>
  data.filter(
    (item) =>
      item.title.indexOf(search) >= 0 ||
      item.creator.find((creator) => creator.userName.indexOf(search) >= 0)
  );

const MV = () => {
  const { filter, setSearch, search, data, isLoading, count } =
    useInit(useGetMVSubListQuery);

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
  return (
    <>
      <HeaderBar search={search} setSearch={setSearch} count={count} />
      <div className="domSublist_grid">
        <GridVideo list={memoFilter} />
      </div>
    </>
  );
};

export default memo(MV);
