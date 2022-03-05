import React, { useState, useCallback, memo, FC } from "react";
import Event from "@/components/Event";

interface iDynamic {
  list: [];
}

const Dynamic: FC<iDynamic> = ({ list = [] }) => {
  const [actThreadId, setActThreadId] = useState("");
  const handleToggleComment = useCallback((threadId) => {
    setActThreadId((prev) => (prev === threadId ? null : threadId));
  }, []);
  return (
    <div className="divide-y">
      {list.map((item) => (
        <Event
          key={item.id}
          item={item}
          commentIsShow={actThreadId === item.info.threadId}
          handleToggleComment={handleToggleComment}
        />
      ))}
    </div>
  );
};

export default memo(Dynamic);
