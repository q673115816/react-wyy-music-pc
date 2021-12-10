import { Link } from "react-router-dom";
import React, { FC, memo } from "react";

interface iTags {
  tags: [];
}

const Tags: FC<iTags> = ({ tags = [] }) => {
  if (tags.length === 0) return null;
  return (
    <div className="tags">
      <span>标签：</span>
      {tags.map((tag, index) => (
        <span key={tag}>
          {index > 0 && " / "}
          <Link to={`/home/playlist/${tag}`} className="tag ui_link">
            {tag}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default memo(Tags);
