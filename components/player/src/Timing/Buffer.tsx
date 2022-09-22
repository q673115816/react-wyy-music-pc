import React, { memo, useContext } from "react";
import { AppContext } from "../context";
import styled from "styled-components";

const Context = styled.div`
  position: absolute;
  inset: 0;
`;

const Item = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: gainsboro;
`;

const Buffer = () => {
  const { state } = useContext(AppContext);
  const { duration, buffered } = state;
  return (
    <Context title="缓存">
      {buffered.map(([start, end]) => (
        <Item
          key={`${start}-${end}`}
          style={{
            left: `${(start / duration) * 100}%`,
            right: `${(1 - end / duration) * 100}%`,
          }}
        />
      ))}
    </Context>
  );
};

export default memo(Buffer);
