import React, { createElement, memo, useEffect } from "react";
import { Elements, navs } from "./config";
import { apiSetting } from "@/api";

const Settings = () => {
  // const handleInit = async () => {
  //   await apiSetting();
  // };
  // useEffect(() => {
  //   handleInit();
  // });
  return (
    <div className="flex flex-col h-full">
      <div className="px-8 py-5">
        <div className="h1">设置</div>
        <div className="mt-8 flex gap-4">
          {navs.map((item) => (
            <a href={`#${item}`} key={item}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="px-8 overflow-auto max-h-full flex-auto">
        {Elements.map(([nav, Element]) => (
          <div id={nav} key={nav} className="py-7 border-b">
            {createElement(Element)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Settings);
