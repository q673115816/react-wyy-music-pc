import { MouseEventHandler } from "react";

export type pageProps = {
  total: number;
  page: number;
  func: (nextPage: number) => null;
};

export interface btnProps {
  handleClick: MouseEventHandler;
  status?: boolean;
  current?: boolean;
}
