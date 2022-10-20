import React, { memo } from "react";
import Empty from "./Empty";

const Comments = () => {
  return <Empty active={"评论"} />;
};

export default memo(Comments);
