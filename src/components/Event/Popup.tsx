import React, { FC, memo } from "react";
import Textarea from "@/components/Event/Textarea";
import Comment from "@/components/Event/Comment";
import Content from "./Content";
interface iProps {
  threadId: number;
}

const Popup: FC<iProps> = ({ threadId }) => {
  return (
    <div className="comment bg-gray-100 mt-3 rounded">
      <div className="p-3">
        <Textarea />
      </div>
      <Content threadId={threadId} />
    </div>
  );
};

export default memo(Popup);
