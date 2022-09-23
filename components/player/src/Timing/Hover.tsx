import React, { FC, memo, useContext } from "react";
import dayjs from "dayjs";
import { AppContext } from "../context";
import styled from "styled-components";

const Context = styled.div`
  position: absolute;
  bottom: 0;
  color: #fff;
  padding: 4px 8px;
  border: 1px solid gainsboro;
  background-color: rgba(0, 0, 0, 0.8);
  transform: translate(-50%, -50%);
`;

const Hover: FC<{ hoverRatio: number }> = ({ hoverRatio }) => {
  const { state } = useContext(AppContext);
  const { duration } = state;
  return (
    <Context style={{ left: `${hoverRatio * 100}%` }}>
      {dayjs(hoverRatio * duration * 1000).format("mm:ss")}
    </Context>
  );
};

export default memo(Hover);
