import React from "react";
import styled from "styled-components";

const StyledArrowsExpandUpRight = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    box-shadow: 6px -6px 0 -4px;
  }

  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid;
    border-radius: 1px;
    left: 0;
    bottom: 0;
  }

  &::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: currentColor;
    width: 2px;
    height: 10px;
    transform: rotate(45deg);
    bottom: 8px;
    right: 2px;
    border-radius: 4px;
  }
`;
export const ArrowsExpandUpRight = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledArrowsExpandUpRight
        {...props}
        ref={ref}
        icon-role="arrows-expand-up-right"
      />
    </>
  );
});

export default ArrowsExpandUpRight;
