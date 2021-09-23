import React, { memo } from "react";

export default memo(() => {
  return (
    <div className={`p-8`}>
      <video className={`w-full`} autoPlay playsInline />
    </div>
  );
});
