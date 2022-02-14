import { MouseEventHandler } from "react";

export interface iArrowProps {
  onClick: MouseEventHandler;
}

export interface iArrowWithIconProps extends iArrowProps {
  className: string;
}
