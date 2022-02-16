import React, { FC, memo, useMemo } from "react";
import GridVideo from "@/components/GridVideo";

const filterRule = (data, search) =>
  data.filter(
    (item) =>
      item.title.indexOf(search) >= 0 ||
      item.creator.find((creator) => creator.userName.indexOf(search) >= 0)
  );

interface iProps {
  list: [];
}

const MV: FC<iProps> = ({ list }) => {
  const memoFilter = useMemo(
    () =>
      list.map(
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
    [list]
  );
  return (
    <div className="domSublist_grid">
      <GridVideo list={memoFilter} />
    </div>
  );
};

export default memo(MV);
