import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { iList } from "./types";

export default memo<{ list: iList }>(({ list }) => {
  const { pathname } = useLocation();
  return (
    <div className={`grid grid-cols-3 gap-5`}>
      {list.map(([key, options]) => (
        <div key={key}>
          <Link to={`${pathname}/${key}`}>
            <img
              className={`ui_aspect-ratio-16/9 cursor-pointer`}
              loading={`lazy`}
              src={options.banner}
              alt=""
            />
          </Link>
          <Link to={`${pathname}/${key}`} className={`cursor-pointer`}>
            {options.title}
          </Link>
          <div>
            <Link to={`/`}>{options.user}</Link>
          </div>
        </div>
      ))}
    </div>
  );
});
