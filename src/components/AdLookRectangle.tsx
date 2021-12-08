import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

const link = "https://look.163.com/hot?livetype=2";

const ADLookRectangle: FC<{ tag: boolean }> = ({ tag = false }) => (
  <div className="item">
    <div className="rounded overflow-hidden relative">
      <Link to={link}>
        <img
          loading={`lazy`}
          className="object-cover ui_aspect-ratio-1/1"
          src="@img/kankan.jpg"
          alt=""
        />
        <div className="absolute top-0 right-0 m-1">
          <span className="text-white">playCount</span>
        </div>
        <div className="absolute left-0 bottom-0 m-1">
          <span className="text-white">artist</span>
        </div>
        {tag && Math.random() < 0.67 && (
          <div className="lt">
            <div className="tag">理想女友</div>
          </div>
        )}
      </Link>
    </div>
    <div className="footer text-sm mt-1">
      <Link to={link}>name</Link>
    </div>
  </div>
);

export default memo(ADLookRectangle);
