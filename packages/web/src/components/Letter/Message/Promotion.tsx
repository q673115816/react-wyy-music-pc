import React, { memo } from "react";

const Promotion = ({ msg = {} }) => (
  <a href={msg.promotion.url} className="embed">
    <div className="cover">
      <img className="" src={msg.promotion.coverUrl} alt="" />
    </div>
    <div className="promotion text-gray-400">{msg.promotion.title}</div>
  </a>
);

export default memo(Promotion);
