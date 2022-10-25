import React, { useState, memo } from "react";
import { maskSelector, setDialogReset } from "@/modules/reducers/mask/slice";
import {
  setHomeOrder,
  defaultOrder,
  settingSelector,
  Order,
} from "@/modules/reducers/settings/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { IconBulb } from "@tabler/icons";
import HOCDialog from "../Dialog/Dialog";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";

import SortableItem from "./SortableItem";
import Item from "./Item";

const HomeOrder = () => {
  const dispatch = useAppDispatch();
  const { dialogHomeOrderVisibility } = useAppSelector(maskSelector);
  const { order } = useAppSelector(settingSelector);
  const [state, setState] = useState(order);
  const [activeId, setActiveId] = useState(null);
  const handleReset = () => {
    setState(defaultOrder);
  };

  const handleConfirm = () => {
    dispatch(setDialogReset());
    dispatch(setHomeOrder(state));
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    setActiveId(active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setState((items: Order[]) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  };

  if (!dialogHomeOrderVisibility) return null;
  return (
    <HOCDialog title="调整栏目顺序" width={388}>
      <div className="content">
        <div className="tips mx-10 text-gray-400 mb-6 flex items-center">
          <IconBulb size={14} />
          <span className="ml-1">
            想调整首页栏目的顺序?按住右边的按钮拖动即可
          </span>
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
        >
          <SortableContext items={state} strategy={verticalListSortingStrategy}>
            {state.map((order: Order) => (
              <SortableItem key={order} order={order} />
            ))}
          </SortableContext>
          <DragOverlay>
            {activeId ? <Item order={activeId} /> : null}
          </DragOverlay>
        </DndContext>
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
