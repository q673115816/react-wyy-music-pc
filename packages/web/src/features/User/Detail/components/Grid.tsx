import React, { FC, memo } from "react";
import Item from "@/components/GridPlaylist/Item";

interface iProps {
  list: [];
}

const Grid: FC<iProps> = ({ list = [], children }) => {
  return (
    <div className="domUserDetail_list px-8 grid grid-cols-4 gap-5">
      {children}
      {list.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default memo(Grid);
