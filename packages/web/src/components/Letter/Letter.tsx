import React, { useEffect, memo } from "react";
import {
  letterSelector,
  setMsgPrivateHistory,
} from "@/modules/reducers/letter/slice";
import List from "./List";
import Message from "./Message";
import style from "./Letter.module.scss";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import classNames from "classnames";

const Letter = () => {
  const { showMsgPrivateHistory } = useAppSelector(letterSelector);
  const { popupStatus } = useAppSelector(({ mask }) => mask);
  const dispatch = useAppDispatch();

  useEffect(
    () => () => {
      dispatch(
        setMsgPrivateHistory({
          showMsgPrivateHistory: false,
        })
      );
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
