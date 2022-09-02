import React, { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Gender from "@/components/Gender";

const layouts = {
  "--grid-template-columns": "60px auto 1fr",
};

const UserProfiles = ({ userprofiles = [] }) => (
  <div className="userprofiles_list _list" style={layouts}>
    {userprofiles.map((item, index) => (
      <Link
        to={`/user/${item.userId}`}
        className={classNames("item grid items-center hover:bg-gray-100", {
          "bg-gray-50": index % 2 === 1,
        })}
        key={item.userId}
      >
        <div className="rounded-full overflow-hidden">
          <img src={`${item.avatarUrl}?param=60y60`} alt="" />
        </div>
        <div className="name px-5">
          {item.nickname}
          &nbsp;
          <Gender size={16} gender={item.gender} />
        </div>
        <div className="flex">
          <div className={`truncate text-gray-400 flex-1 w-0`}>
            {item.signature}
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default memo(UserProfiles);
