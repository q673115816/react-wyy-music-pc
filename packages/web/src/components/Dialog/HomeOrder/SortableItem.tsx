import React, { FC, memo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Item from "./Item";

interface iProps {
  order: string;
}

const SortableItem: FC<iProps> = ({ order }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: order });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Item
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      order={order}
    />
  );
};

export default memo(SortableItem);
