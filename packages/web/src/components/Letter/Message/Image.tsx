import React, { memo } from "react";

const Image = ({ msg = {} }) => (
  <div className="img">
    <img src={msg.picInfo.picUrl} className="" alt="" />
  </div>
);

export default memo(Image);
