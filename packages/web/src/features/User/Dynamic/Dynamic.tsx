import React, { memo, useRef, useContext, useState } from "react";
import useInfinite from "@/hooks/useInfinite";
import Loading from "@/components/Loading";
import { useParams } from "react-router-dom";
import { context } from "@/features/User/context";
import Item from "./Item";

const Dynamic = () => {
  const { profile } = useContext(context);
  const [list, setList] = useState([-1]);

  return (
    <div className="h-full overflow-auto">
      <div className="h1 ui_header">{`${profile.nickname}的动态`}</div>
      <div className="px-8">
        {list.length === 0 ? (
          <div className="empty">暂无动态</div>
        ) : (
          list.map((lasttime, index) => (
            <Item key={lasttime} lasttime={lasttime} setList={setList} />
          ))
        )}
      </div>
    </div>
  );
};

export default memo(Dynamic);
