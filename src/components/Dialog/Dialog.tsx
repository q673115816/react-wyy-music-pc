import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { setDialogReset } from "@/modules/reducers/mask/slice";
import { IconX } from "@tabler/icons";
import DomMask from "@/components/Mask";

const initialState = {
  drag: false,
  startX: 0,
  startY: 0,
  moveX: 0,
  moveY: 0,
  lastX: 0,
  lastY: 0,
};
export default ({ children, id, title }) => {
  const dispatch = useDispatch();
  const [dialogState, dialogDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "MOUSE_DOWN":
        return {
          ...state,
          ...action.payload,
        };
      case "MOUSE_MOVE":
        return {
          ...state,
          ...action.payload,
        };
      case "MOUSE_UP":
        return {
          ...state,
          drag: false,
          lastX: state.moveX,
          lastY: state.moveY,
        };
      default:
        return state;
    }
  }, initialState);
  const handleMouseDown = (e) => {
    dialogDispatch({
      type: "MOUSE_DOWN",
      payload: {
        drag: true,
        startX: e.clientX,
        startY: e.clientY,
      },
    });
  };
  const handleMouseMove = (e) => {
    if (dialogState.drag) {
      // console.dir(refDialog.current.getBoundingClientRect());
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
    <DomMask onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div
        className="ui_dialog bg-white shadow rounded"
        id={id}
        style={{
          transform: `translate(${dialogState.moveX}px, ${dialogState.moveY}px)`,
        }}
      >
        <button
          type="button"
          className="ui_dialog_close close"
          onClick={() => dispatch(setDialogReset())}
        >
          <IconX stroke={1.5} />
        </button>
        <div
          className="ui_dialog_header flex-center"
          onMouseDown={handleMouseDown}
        >
          <div className="ui_dialog_title">{title}</div>
        </div>
        <div className="ui_dialog_main">{children}</div>
      </div>
    </DomMask>
  );
};
