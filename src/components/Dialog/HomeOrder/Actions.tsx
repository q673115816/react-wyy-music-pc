import React, { memo, MouseEvent, useEffect, useRef, useState } from "react";
import Drag from "@/components/Drag";
import classNames from "classnames";
import { IconMenu } from "@tabler/icons";
import produce from "immer";
import { Order } from "@/reducers/setting/slice";

const useActions = ({ order }: { order: Order }) => {
  const [tempHomeOrder, setTempHomeOrder] = useState(order);
  const [active, setActive] = useState("");
  const [top, setTop] = useState(0);
  const [startY, setStartY] = useState(0);
  const RefIndex = useRef(-Infinity);
  const RefTop = useRef(top);
  const RefStartY = useRef(startY);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const apart = e.clientY - startY;
    const { current: index } = RefIndex;
    if (index <= 0 && apart <= 0) return false;
    if (index >= tempHomeOrder.length - 1 && apart >= 0) return false;
    if (apart >= 48 * (3 / 4)) {
      RefStartY.current += 48;
      setTempHomeOrder(
        produce((draft) => {
          [draft[index], draft[index + 1]] = [draft[index + 1], draft[index]];
        })
      );
      RefIndex.current += 1;
      RefTop.current = -48 * (1 / 4);
      return false;
    }
    if (apart <= -48 * (3 / 4)) {
      RefStartY.current -= 48;
      setTempHomeOrder(
        produce((draft) => {
          [draft[index], draft[index - 1]] = [draft[index - 1], draft[index]];
        })
      );
      RefIndex.current -= 1;
      RefTop.current = 48 * (1 / 4);
      return false;
    }
    RefTop.current = apart;
  };

  const onMouseUp = () => {
    setActive("");
  };

  const onMouseDown = (
    e: MouseEvent<HTMLDivElement>,
    active: string,
    index: number
  ) => {
    setActive(active);
    RefStartY.current = e.clientY;
    RefIndex.current = index;
  };

  useEffect(() => {
    setTop(RefTop.current);
  }, [RefTop]);

  useEffect(() => {
    setStartY(RefStartY.current);
  }, [RefStartY]);

  return {
    tempHomeOrder,
    onMouseMove,
    onMouseUp,
    onMouseDown,
    active,
    top,
  };
};

export default memo<{ order: Order }>(({ order }) => {
  const { tempHomeOrder, onMouseMove, onMouseUp, onMouseDown, active, top } =
    useActions({ order });

  return (
    <div className="flex flex-col relative">
      {tempHomeOrder.map((order, index) => (
        <div key={order} className="h-12 text-base text-gray-500">
          <Drag
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseDown={(e: MouseEvent<HTMLDivElement>) =>
              onMouseDown(e, order, index)
            }
            className={classNames(
              "w-full border-b hover:bg-gray-200 bg-white px-10 h-12 flex items-center",
              active === order && "absolute shadow z-10"
            )}
            style={{
              transform: `translate(0, ${active === order ? top : 0}px)`,
            }}
          >
            {order}
            <IconMenu className="ml-auto cursor-move" />
          </Drag>
        </div>
      ))}
    </div>
  );
});
