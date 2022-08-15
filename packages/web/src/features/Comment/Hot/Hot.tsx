import React, { memo, useCallback, useState } from "react";
import List from "./List";

const Hot = () => {
  const [list, setList] = useState([false]);
  const setHasMore = useCallback(() => {
    setList((prevList) => [...prevList, false]);
  }, []);
  return (
    <div className="px-8 py-5 overflow-auto max-h-full flex-auto">
      <div className="h1">精彩评论</div>
      <div className="">
        {list.map((_, index) => (
          <List index={index} key={index} setHasMore={setHasMore} />
        ))}
      </div>
    </div>
  );
};
export default memo(Hot);
