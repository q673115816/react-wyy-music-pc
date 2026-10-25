import React, { useEffect, memo } from "react";

import List from "./List";
import Message from "./Message";
import style from "./Letter.module.scss";
import classNames from "classnames";
import { useLetterStore, useMaskStore } from "@/stores";

const Letter = () => {
  const { showMsgPrivateHistory } = useLetterStore();
  const { popupStatus } = useMaskStore();

  useEffect(
    () => () => {
      useLetterStore.getState().setMsgPrivateHistory({
          showMsgPrivateHistory: false,
        })
      ;
    },
    []
  );
  if (popupStatus !== "letter") return null;
  return (
    <div
      className={classNames(
        style.letter,
        "bg-white shadow flex flex-col absolute z-40"
      )}
    >
      {showMsgPrivateHistory ? <Message /> : <List />}
    </div>
  );
};

export default memo(Letter);
