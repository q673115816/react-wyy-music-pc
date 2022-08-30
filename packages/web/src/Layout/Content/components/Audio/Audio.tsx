import React, { FC, memo, ReactEventHandler, useEffect } from "react";
import {
  audioSelector,
  setAudioBuffered,
  setAudioCurrentTime,
  setAudioNext,
  setAudioRunningPause,
  setRunErrorAdd,
} from "@/modules/reducers/audio/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { useAudio, useBoolean } from "react-use";
import { volumeSelector } from "@/modules/reducers/volume/slice";

const Audio: FC = () => {
  const dispatch = useAppDispatch();
  const { running, dropping, currentTime, jumpTime, errorCount, src } =
    useAppSelector(audioSelector);

  const { volume } = useAppSelector(volumeSelector);
  const [canplay, setCanplay] = useBoolean(false);

  const onDurationChange: ReactEventHandler<HTMLAudioElement> = (e) => {};

  const onLoadedMetadata: ReactEventHandler<HTMLAudioElement> = (e) => {};

  const onProgress: ReactEventHandler<HTMLAudioElement> = () => {
    const buffered = state.buffered.map(({ start, end }) => [start, end]);
    dispatch(setAudioBuffered(buffered));
  };

  const onEnded = () => {
    dispatch(setAudioNext());
  };

  const onError: ReactEventHandler = (e) => {
    if (!canplay) {
      console.log("未canplay出现错误", e);
      return false;
    }
    console.log("出现错误，切换下一首", e);
    if (errorCount >= 5) {
      // TODO
      console.log("出错过多");
    }
    dispatch(setAudioNext());
    dispatch(setRunErrorAdd());
  };

  const onTimeUpdate: ReactEventHandler<HTMLAudioElement> = (e) => {
    if (dropping) return;
    if (!state.playing) return;
    dispatch(setAudioCurrentTime({ currentTime: state.time }));
  };

  const onCanPlay = () => {
    setCanplay(true);
  };

  const [audio, state, controls] = useAudio({
    src,
    onDurationChange,
    onLoadedMetadata,
    onProgress,
    onEnded,
    onError,
    onTimeUpdate,
    onCanPlay,
    autoPlay: running,
  });

  useEffect(() => {
    (async () => {
      if (running) await controls.play();
      else controls.pause();
    })();
  }, [running]);

  useEffect(() => {
    return () => {
      dispatch(setAudioRunningPause());
    };
  }, []);

  useEffect(() => {
    if (!jumpTime) return;
    controls.seek(jumpTime);
    dispatch(setAudioCurrentTime({ currentTime: jumpTime }));
  }, [jumpTime]);

  useEffect(() => {
    controls.volume(volume * 0.01);
  }, [volume]);

  return audio;
};

export default memo(Audio);
