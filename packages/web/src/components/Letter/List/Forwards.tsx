import React, { memo } from "react";
import Empty from "./Empty";

const Forwards = () => {
  return <Empty active={"@我"} />;
};

export default memo(Forwards);
