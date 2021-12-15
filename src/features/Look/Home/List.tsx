import React, { FC, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { iHome } from "./types";

const Home: FC<iHome> = ({ list }) => {
  const { pathname } = useLocation();
  return (
    <div className={`grid grid-cols-3 gap-5`}>
      {list.map(([key, { uid, title, banner, user }]) => (
        <div key={uid}>
          <Link to={`${pathname}/${uid}`}>
            <img
              className={`ui_aspect-ratio-16/9 cursor-pointer`}
              loading={`lazy`}
              src={banner}
              alt=""
            />
          </Link>
          <Link to={`${pathname}/${uid}`} className={`cursor-pointer`}>
            {title}
          </Link>
          <div>
            <Link to={`/`}>{user}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(Home);
