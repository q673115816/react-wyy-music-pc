import React, { createElement, FC, memo, useState } from "react";
import classNames from "classnames";
import { commonSelector } from "@/modules/reducers/common/slice";
import { useAppSelector } from "@/modules/hooks";
import { accountSelector } from "@/modules/reducers/account/slice";
import Private from "./Private";
import Comments from "./Comments";
import Forwards from "./Forwards";
import Notices from "./Notices";

const Nodes: { [key: string]: FC } = {
  私信: Private,
  评论: Comments,
  "@我": Forwards,
  通知: Notices,
};

const navs = Object.keys(Nodes);

const List = () => {
  const { isLogin } = useAppSelector(accountSelector);
  const { newMsgCount } = useAppSelector(commonSelector);
  const [active, setActive] = useState("私信");

  const handleChangeNav = (active: string) => {
    setActive(active);
  };

  return (
    <>
      <div className="header flex items-baseline p-6 pb-b">
        <span className="title text-lg">消息</span>
        {isLogin ? (
          <button
            type="button"
            className="clear text-sm font-bold ml-auto ui_link"
          >
            一键已读
          </button>
        ) : (
          <span className="clear text-sm font-bold ml-auto ui_disabled">
            一键已读
          </span>
        )}
      </div>
      <div className="nav flex-none flex m-auto w-min rounded-full border">
        {navs.map((nav) => (
          <button
            onClick={() => handleChangeNav(nav)}
            type="button"
            key={nav}
            className={classNames(
              "relative w-20 h-8 rounded-full",
              active === nav ? "bg-gray-400 text-white" : "hover:bg-gray-200"
            )}
          >
            {nav}
            {nav === "私信" && (
              <span className="text-white border border-white rounded-full leading-tight px-1 absolute top-0 right-0 bg-red-500 transform translate-x-1/2 -translate-y-1/2 z-10">
                {newMsgCount}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="list mt-3 overflow-auto max-h-full flex-auto">
        {createElement(Nodes[active])}
      </div>
    </>
  );
};

export default memo(List);
