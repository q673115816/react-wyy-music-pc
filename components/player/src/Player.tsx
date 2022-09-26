import React, { FC, memo, useRef } from "react";
import { AppProvider } from "./context";
import Video from "./Video";
import Control from "./Control";
import Timing from "./Timing";
import type { PlayerProps } from "./types";
import { useIntersection } from "react-use";

const Player: FC<PlayerProps> = (props) => {
  return (
    <AppProvider>
      <div>
        <Video {...props} />
        <Timing />
        <Control />
      </div>
    </AppProvider>
  );
};

export default memo(Player);
