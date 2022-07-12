import styled, { css } from "styled-components";
import React, { memo } from "react";

interface ControlProps {
  readonly active: boolean;
}

const ControlPoint = styled.div<ControlProps>`
  cursor: pointer;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  ${(props) => css`
    background-color: ${!!props.active ? "red" : "gray"};
  `}
`;

export default ControlPoint;
