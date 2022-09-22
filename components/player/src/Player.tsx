import React, { FC, memo } from "react";
import { AppProvider } from "./context";
import Video from "./Video";
import Control from "./Control";
import Timing from "./Timing";
import type { PlayerProps } from "./types";

const Player: FC<PlayerProps> = (props) => {
  return (
    <AppProvider>
      <Video {...props} />
      <Timing />
      <Control />
    </AppProvider>
  );
};

export default memo(Player);
