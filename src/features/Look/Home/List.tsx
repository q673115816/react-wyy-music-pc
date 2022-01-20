import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { iHome } from "./types";

const Home: FC<iHome> = ({ list }) => {
  return (
    <div className={`grid grid-cols-3 gap-5`}>
      {list.map(({ uid = "", title = "", banner = "", user = "" }) => (
        <div key={uid}>
          <Link to={uid}>
            <img
              className={`aspect-video cursor-pointer`}
              loading={`lazy`}
              src={banner}
              alt=""
            />
          </Link>
          <Link to={uid} className={`cursor-pointer`}>
            {title}
          </Link>
          <div>
            <Link to={`/user/${uid}`}>{user}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Home);
