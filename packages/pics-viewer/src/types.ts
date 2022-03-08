import { CounterActions } from "react-use/lib/useCounter";

export interface SrcObject {
  originUrl: string;
  width: number;
  height: number;
}

export interface iProps {
  srcList: SrcObject[];
  gap?: string | number;
  width?: string | number;
  className?: string;
}

export interface Active {
  value: number;
  control: CounterActions;
}
