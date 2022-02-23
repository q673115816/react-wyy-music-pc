import React, { memo } from "react";
import "./style.scss";
import { Elements, navs } from "./config";

const Settings = () => {
  return (
    <div className="domSetting flex flex-col h-full">
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
          <div id={nav} key={nav} className="pb-8 mb-8 border-b">
            <Element />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Settings);
