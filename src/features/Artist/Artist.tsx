import React, { createElement, memo, useState } from "react";

import classNames from "classnames";
import "./style.scss";
import Detail from "./components/Detail";
import { Contents, navs } from "./config";

export default memo(function Artist() {
  const [active, setActive] = useState(navs[0][1]);
  return (
    <div className="domArtist overflow-auto max-h-full flex-auto">
      <Detail />
      <div>
        <div className="flex mx-8">
          <div className="flex gap-4 text-sm">
            {navs.map(([name, key]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                type="button"
                className={classNames(
                  active === key && "font-bold ui_underline"
                )}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="relative ml-auto" />
        </div>
        {createElement(Contents[active])}
      </div>
    </div>
  );
});
