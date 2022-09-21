import React, { useReducer } from "react";
import Control from "./Control";
import videoReducer, { initialState, Provider } from "./reducer";
import Timing from "./Timing";

const Player = () => {
  const [
    { play, duration, currentTime, jumpTime, buffered, full },
    videoDispatch,
  ] = useReducer(videoReducer, initialState);
  return (
    <Provider
      value={{
        play,
        duration,
        currentTime,
        buffered,
        full,
        handleChangePlay,
        handleChangeFull,
        videoDispatch,
      }}
    >
      <Timing />
      <Control />
    </Provider>
  );
};

export default memo(Player);
