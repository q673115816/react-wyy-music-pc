import styled, { css } from "styled-components";

interface ArrowProps {
  readonly dir: "left" | "right";
  readonly hidden: boolean;
}

const Arrow = styled.button<ArrowProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  ${(props) => css`
    ${props.dir}: 0;
    display: ${props.hidden ? "none" : "flex"};
  `}
`;

export default Arrow;
