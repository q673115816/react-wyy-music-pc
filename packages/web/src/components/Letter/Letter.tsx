import React, { useEffect, memo } from "react";
import {
  letterSelector,
  setMsgPrivateHistory,
} from "@/modules/reducers/letter/slice";
import List from "./List";
import Message from "./Message";
import "./style.scss";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";

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
    <div id="privateLetter" className="flex flex-col absolute z-40">
      {showMsgPrivateHistory ? <Message /> : <List />}
    </div>
  );
};

export default memo(Letter);
