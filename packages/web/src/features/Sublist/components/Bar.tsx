import React, { FC, memo } from "react";
import Search from "@/components/HeaderBarSearch";

interface iProps {
  path: string;
  count: number;
  search: string;
  setSearch: (search: string) => void;
}

const Bar: FC<iProps> = ({ path, count, search, setSearch }) => {
  return (
    <div className="ui_headerBar">
      <span className="title">
        <b>收藏的{path}</b>
        &nbsp; ({count})
      </span>
      <div className="right">
        <Search
          search={search}
          setSearch={setSearch}
          placeholder={`搜索我收藏的${path}`}
        />
      </div>
    </div>
  );
};

export default memo(Bar);
