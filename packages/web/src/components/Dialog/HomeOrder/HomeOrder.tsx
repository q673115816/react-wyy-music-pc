import React, { useState, memo } from "react";
import { maskSelector, setDialogReset } from "@/modules/reducers/mask/slice";
import {
  setHomeOrder,
  defaultOrder,
  settingSelector,
  Order,
} from "@/modules/reducers/settings/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { IconBulb, IconMenu } from "@tabler/icons";
import style from "./HomeOrder.module.scss";
import HOCDialog from "../Dialog/Dialog";
import classNames from "classnames";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
  DroppableProvided,
  DraggableProvided,
} from "react-beautiful-dnd";

const reorder = (list: [], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const HomeOrder = () => {
  const dispatch = useAppDispatch();
  const { dialogHomeOrderVisibility } = useAppSelector(maskSelector);
  const { order } = useAppSelector(settingSelector);
  const [state, setState] = useState(order);

  const handleReset = () => {
    setState(defaultOrder);
  };

  const handleConfirm = () => {
    dispatch(setDialogReset());
    dispatch(setHomeOrder(state));
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    if (result.destination.index === result.source.index) return;

    setState(reorder(state, result.source.index, result.destination.index));
  };

  if (!dialogHomeOrderVisibility) return null;
  return (
    <HOCDialog
      id="dialogHomeOrder"
      className={style.dialogHomeOrder}
      title="调整栏目顺序"
    >
      <div className="content">
        <div className="tips mx-10 text-gray-400 mb-6 flex items-center">
          <IconBulb size={14} />
          <span className="ml-1">
            想调整首页栏目的顺序?按住右边的按钮拖动即可
          </span>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={"order"}>
            {(droppableProvided: DroppableProvided) => (
              <div
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                {state.map((order: Order, index: number) => (
                  <Draggable key={order} index={index} draggableId={order}>
                    {(draggableProvided: DraggableProvided) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <div className="h-12 w-full text-base text-gray-500 bg-white hover:bg-gray-200 px-10">
                          <div className="h-full flex items-center border-b">
                            {order}
                            <IconMenu className="ml-auto cursor-move" />
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="flex-center py-4">
          <button
            onClick={handleReset}
            type="button"
            className="underline text-gray-400 block"
          >
            恢复默认排序
          </button>
        </div>
        <div className="flex-center pt-4 pb-8 space-x-2">
          <button
            onClick={handleConfirm}
            type="button"
            className="rounded-full ui_theme_bg_color text-white h-8 w-20"
          >
            完成
          </button>
          <button
            type="button"
            className="border rounded-full h-8 w-20"
            onClick={() => dispatch(setDialogReset())}
          >
            取消
          </button>
        </div>
      </div>
    </HOCDialog>
  );
};

export default memo(HomeOrder);
