import React, { createElement, FC, memo, useState } from "react";
import {
  IconLayoutGrid,
  IconLayoutList,
  IconList,
  TablerIcon,
} from "@tabler/icons";
import classNames from "classnames";
import Grid from "./Grid";
import List from "./List";
import Column from "./Column";

const layouts: [string, string, TablerIcon][] = [
  ["Grid", "大图模式", IconLayoutGrid],
  ["List", "列表模式", IconLayoutList],
  ["Column", "图列模式", IconList],
];

const Mains = {
  Grid,
  List,
  Column,
};

interface iProps {
  list: [];
}

const Layout: FC<iProps> = ({ list = [] }) => {
  const [layout, setLayout] = useState("Grid");
  return (
    <div className="pb-10">
      <div className="domUserDetail_headerBar flex items-center px-8 pb-4">
        <span className="name text-base font-bold">歌单</span>
        <div className="layouts ml-auto flex overflow-hidden rounded space-x-0.5">
          {layouts.map(([type, title, Ico]) => (
            <button
              key={type}
              type="button"
              className={classNames(
                "layout bg-gray-100 h-5 w-6 flex-center",
                layout === type ? "bg-gray-500 text-white" : "hover:bg-gray-200"
              )}
              onClick={() => setLayout(type)}
              title={title}
            >
              <Ico size={16} />
            </button>
          ))}
        </div>
      </div>
      {createElement(Mains[layout], { list })}
    </div>
  );
};

export default memo(Layout);
