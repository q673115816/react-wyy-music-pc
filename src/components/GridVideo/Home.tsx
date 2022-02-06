import React, { memo } from "react";
import MenuCreate from "@/components/MenuCreate";
import Item from "./Item";

const GridVideo = ({ list = [], schema = [] }) => (
  <div className="grid grid-cols-3 gap-5">
    {list.map((item) => (
      <MenuCreate
        type={item.type === 0 ? "mv" : "video"}
        schema={schema}
        key={item.id}
      >
        <Item item={item} />
      </MenuCreate>
    ))}
  </div>
);

export default memo(GridVideo)
