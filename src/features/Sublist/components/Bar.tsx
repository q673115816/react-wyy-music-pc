import React, { FC, memo } from "react";
import Search from "@/components/HeaderBarSearch";

interface iProps {
  path: string;
  count: number;
  search: string;
  setSearch: (search: string) => void;
}

const Bar: FC<iProps> = ({ path, count, search, setSearch, children }) => {
  return (
    <div>
      <div className="ui_headerBar">
        <span className="title">
          <b>收藏的{decodeURIComponent(path)}</b>
          &nbsp; ({count})
        </span>
        <div className="right">
          <Search
            search={search}
            setSearch={setSearch}
            placeholder={`搜索我收藏的${decodeURIComponent(path)}`}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default memo(Bar);
