import { MouseEventHandler } from "react";

export type pageProps = {
  total: number;
  page: number | string;
  func: (nextPage: number) => void;
};

export interface btnProps {
  handleClick: MouseEventHandler;
  status?: boolean;
  current?: boolean;
}
