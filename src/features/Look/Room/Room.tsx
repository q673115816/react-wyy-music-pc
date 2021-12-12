import React, { memo } from "react";
import { useParams } from "react-router-dom";

export default memo(function Room() {
  const { id } = useParams();
  return (
    <div className={`p-8`}>
      <video className={`w-full`} autoPlay playsInline />
    </div>
  );
});
