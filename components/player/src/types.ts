export interface PlayerProps {
  url: string;
  detail: any;
  brs: [];
  fixed?: boolean;
}

export interface State {
  play: boolean;
  full: boolean;
  buffered: number[][];
  duration: number;
  currentTime: number;
  jumpTime: number;
  volume: number;
  muted: boolean;
}

export interface Action {
  type: string;
  payload?: any;
}
