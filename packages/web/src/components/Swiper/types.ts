import { MouseEventHandler, ReactNode } from "react";

export interface iArrowProps {
  onClick: MouseEventHandler;
  children: ReactNode;
  className: string;
}
