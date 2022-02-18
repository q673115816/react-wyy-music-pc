import React, { FC, memo } from "react";
import Search from "@/components/HeaderBarSearch";
import { useLocation } from "react-router-dom";

interface iProps {
  count: number;
  search: string;
  setSearch: (search: string) => void;
}

const Bar: FC<iProps> = ({ count, search, setSearch }) => {
  const { pathname } = useLocation();
  const name = pathname.slice(9);
  return (
    <div className="ui_headerBar">
      <span className="title">
        <b>收藏的{decodeURIComponent(name)}</b>
        &nbsp; ({count})
      </span>
      <div className="right">
        <Search
          search={search}
          setSearch={setSearch}
          placeholder={`搜索我收藏的${decodeURIComponent(name)}`}
        />
      </div>
    </div>
  );
};

export default memo(Bar);
