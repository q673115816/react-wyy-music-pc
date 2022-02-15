import React, { FC, memo } from "react";
import Search from "@/components/HeaderBarSearch";

interface iProps {
  count: number;
  search: string;
  setSearch: () => void;
  path: string;
}

const HeaderBar: FC<iProps> = ({ count, search, setSearch, path }) => {
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

export default memo(HeaderBar);
