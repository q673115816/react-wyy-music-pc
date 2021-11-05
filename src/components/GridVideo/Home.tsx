import React, { memo } from "react";
import DomMenuCreate from "@/components/MenuCreate";
import Item from "./Item";

export default memo(({ list = [], schema = [] }) => (
  <div className="grid grid-cols-3 gap-5">
    {list.map((item) => (
      <DomMenuCreate
        type={item.type === 0 ? "mv" : "video"}
        schema={schema}
        key={item.id}
      >
        <Item item={item} />
      </DomMenuCreate>
    ))}
  </div>
));
