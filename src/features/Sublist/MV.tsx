import React, { memo, useMemo } from "react";
import { apiMVSublist } from "@/api";
import Search from "@/components/HeaderBarSearch";
import GridVideo from "@/components/GridVideo";
import useInit from "./useInit";
import Empty from "./components/Empty";

const NAME = "视频";

const filterRule = (data, search) =>
  data.filter(
    (item) =>
      item.title.indexOf(search) >= 0 ||
      item.creator.find((creator) => creator.userName.indexOf(search) >= 0)
  );

const MV = () => {
  const { count, setSearch, search, filter } = useInit(
    apiMVSublist,
    filterRule
  );

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
    [filter, search]
  );
  return (
    <div className="domSublist_grid">
      {search && filter.length === 0 ? (
        <Empty tips={`未能找到与“${search}”相关的任何${NAME}`} />
      ) : (
        <GridVideo list={memoFilter} />
      )}
    </div>
  );
};

export default memo(MV);
