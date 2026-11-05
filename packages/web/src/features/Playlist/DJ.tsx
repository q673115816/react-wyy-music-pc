import React, { memo, useEffect } from "react";
import { apiPost } from "@/shared/api/client";

export default memo(({ id }) => {
  const handleInit = async () => {
    try {
      const {} = await apiPost("/dj/detail", {
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
