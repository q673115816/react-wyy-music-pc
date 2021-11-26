import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import DomGender from "@/components/Gender";

const layouts = {
  "--grid-template-columns": "60px 5fr 2fr",
};

export default ({ userprofiles = [] }) => (
  <div className="userprofiles_list _list" style={layouts}>
    {userprofiles.map((item, index) => (
      <Link
        to={`/user/${item.userId}`}
        className={classNames("item grid items-center hover:bg-gray-100", {
          "bg-gray-50": index % 2 === 1,
        })}
        key={item.userId}
      >
        <div className="cover">
          <img src={`${item.avatarUrl}?param=60y60`} alt="" />
        </div>
        <div className="name px-5">
          {item.nickname}
          &nbsp;
          <DomGender size={16} gender={item.gender} />
        </div>
        <div className="signature text-gray-400 ml-auto">{item.signature}</div>
      </Link>
    ))}
  </div>
);
