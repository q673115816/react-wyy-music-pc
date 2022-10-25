import React, {
  forwardRef,
  ForwardRefRenderFunction,
  HTMLAttributes,
} from "react";
import { IconMenu } from "@tabler/icons";
interface iProps extends HTMLAttributes<HTMLDivElement> {
  order: string;
}
const Item: ForwardRefRenderFunction<HTMLDivElement, iProps> = (
  { order, ...props },
  ref
) => {
  return (
    <div {...props} ref={ref}>
      <div className="h-12 w-full text-base text-gray-500 bg-white hover:bg-gray-200 px-10">
        <div className="h-full flex items-center border-b">
          {order}
          <IconMenu className="ml-auto cursor-move" />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Item);
