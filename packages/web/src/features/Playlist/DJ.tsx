import React, { memo, useEffect } from "react";
import { apiDjDetail } from "@/api";

export default memo(({ id }) => {
  const handleInit = async () => {
    try {
      const {} = await apiDjDetail({
        rid: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className="domPlaylistDetail">
      <div className="domPlaylistDetail_header">{}</div>
      <div className="domPlaylistDetail_main">TODO</div>
    </div>
  );
});
