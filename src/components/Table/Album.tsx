import classNames from "classnames";
import React, { memo } from "react";
import { Link } from "react-router-dom";

interface iProps {
  name: string;
  id: number;
  className: string;
}

export default memo<iProps>(({ name = "", id, className = "" }) => (
  <div className={classNames("truncate", className)}>
    {name ? (
      <Link
        title={name}
        className="ui_text_gray_hover"
        to={`/playlist/album/${id}`}
      >
        {name}
      </Link>
    ) : (
      <span className="text-gray-400">未知专辑</span>
    )}
  </div>
));
