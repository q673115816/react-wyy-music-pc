import React, { FC, memo } from "react";
import MenuCreate from "@/components/MenuCreate/MenuCreate";
import Item from "./Item";

interface iProps {
  list: [];
  schema: [][];
}

const GridVideo: FC<iProps> = ({ list = [], schema = [] }) => (
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

export default memo(GridVideo);
