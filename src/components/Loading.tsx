import React, { memo } from "react";
import IcoLoading from "@/assets/images/Spinner-1s-24px.svg";

export default memo(function Loading() {
  return (
    <div className="flex-center">
      <img src={IcoLoading} alt="" />
      载入中...
    </div>
  );
});
