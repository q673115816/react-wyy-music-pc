import React, {
  FC,
  memo,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import Drag from "@/components/Drag";
import classNames from "classnames";
import { IconMenu } from "@tabler/icons";
import { Orders } from "@/modules/reducers/setting/slice";
import { useImmer } from "use-immer";

const useActions = ({ order }: { order: Orders }) => {
  const [currentOrder, setCurrentOrder] = useImmer(order);
  const [active, setActive] = useState("");
  const [top, setTop] = useState(0);
  const [startY, setStartY] = useState(0);
  const RefIndex = useRef(-Infinity);
  const RefTop = useRef(top);
  const RefStartY = useRef(startY);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {};

  const onMouseUp = () => {};

  const onMouseDown =
    (active: string, index: number): MouseEventHandler<HTMLDivElement> =>
    (e) => {};

  return {
    currentOrder,
    onMouseMove,
    onMouseUp,
    onMouseDown,
    active,
    top,
  };
};

interface iProps {
  order: Orders;
}

const Actions: FC<iProps> = ({ order }) => {
  const { currentOrder, onMouseMove, onMouseUp, onMouseDown, active, top } =
    useActions({ order });

  return (
    <div className="flex flex-col relative">
      {currentOrder.map((order, index) => (
        <div key={order} className="h-12 text-base text-gray-500 bg-white">
          <Drag
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseDown={onMouseDown(order, index)}
            className={classNames(
              "w-full border-b hover:bg-gray-200 px-10 h-12 flex items-center",
              active === order && "absolute shadow z-10"
            )}
            style={{
              transform: `translateY(${active === order ? top : 0}px)`,
            }}
          >
            {order}
            <IconMenu className="ml-auto cursor-move" />
          </Drag>
        </div>
      ))}
    </div>
  );
};

export default memo(Actions);
