import React, { useContext, useRef } from "react";
import { IconCircleCheck } from "@tabler/icons";
import { CSSTransition } from "react-transition-group";
import { context } from "./Content";
import style from "./toast.module.css";
import "./toast.css";

const Toast = () => {
  const [{ text, visible }] = useContext(context);
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={visible}
      classNames={`toast`}
      nodeRef={nodeRef}
      unmountOnExit
      timeout={300}
    >
      <div ref={nodeRef} className={style.toast}>
        <IconCircleCheck size={24} />
        &nbsp;
        {text}
      </div>
    </CSSTransition>
  );
};

export default Toast;
