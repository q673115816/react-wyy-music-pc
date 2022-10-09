import React, { FC, memo, MouseEventHandler, PropsWithChildren } from "react";
import { setDialogReset } from "@/modules/reducers/mask/slice";
import { IconX } from "@tabler/icons";
import Mask from "@/components/Mask";
import { useImmerReducer, Reducer } from "use-immer";
import classNames from "classnames";
import { useAppDispatch } from "@/modules/hooks";

interface State {
  drag: boolean;
  startX: number;
  startY: number;
  moveX: number;
  moveY: number;
  lastX: number;
  lastY: number;
}

const initialState: State = {
  drag: false,
  startX: 0,
  startY: 0,
  moveX: 0,
  moveY: 0,
  lastX: 0,
  lastY: 0,
};

const reducer: Reducer<State> = (draft, { type, payload }) => {
  switch (type) {
    case "MOUSE_DOWN":
      return {
        ...draft,
        ...payload,
      };
    case "MOUSE_MOVE":
      return {
        ...draft,
        ...payload,
      };
    case "MOUSE_UP":
      return {
        ...draft,
        drag: false,
        lastX: draft.moveX,
        lastY: draft.moveY,
      };
    default:
      return draft;
  }
};

interface iProps extends PropsWithChildren {
  id: string;
  title: string;
  className?: string;
}

const Dialog: FC<iProps> = ({ children, id, title, className = "" }) => {
  const dispatch = useAppDispatch();
  const [dialogState, dialogDispatch] = useImmerReducer(reducer, initialState);
  const onMouseDown: MouseEventHandler = (e) => {
    dialogDispatch({
      type: "MOUSE_DOWN",
      payload: {
        drag: true,
        startX: e.clientX,
        startY: e.clientY,
      },
    });
  };
  const onMouseMove: MouseEventHandler = (e) => {
    if (dialogState.drag) {
      const moveX = e.clientX - dialogState.startX + dialogState.lastX;
      const moveY = e.clientY - dialogState.startY + dialogState.lastY;
      dialogDispatch({
        type: "MOUSE_MOVE",
        payload: {
          moveX,
          moveY,
        },
      });
    }
  };
  const handleMouseUp = () => {
    dialogDispatch({
      type: "MOUSE_UP",
    });
  };
  return (
    <Mask onMouseMove={onMouseMove} onMouseUp={handleMouseUp}>
      <div
        className={classNames(
          "ui_dialog bg-white shadow rounded absolute",
          className
        )}
        id={id}
        style={{
          top: dialogState.moveY,
          left: dialogState.moveX,
        }}
      >
        <button
          type="button"
          className="ui_dialog_close close"
          onClick={() => dispatch(setDialogReset())}
        >
          <IconX stroke={1.5} />
        </button>
        <div className="ui_dialog_header flex-center" onMouseDown={onMouseDown}>
          <div className="ui_dialog_title">{title}</div>
        </div>
        <div className="ui_dialog_main">{children}</div>
      </div>
    </Mask>
  );
};

export default memo(Dialog);
