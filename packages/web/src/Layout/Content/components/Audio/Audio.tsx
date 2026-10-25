import React, { FC, memo, ReactEventHandler, useEffect, useState } from "react";

import { useAudio, useBoolean, useNetworkState } from "react-use";
import { useVolumeStore, useAudioStore } from "@/stores";

const Audio: FC = () => {
  const { online } = useNetworkState();
  const { running, dropping, currentTime, jumpTime, errorCount, src } =
    useAudioStore();

  const [usedSrc, setUsedSrc] = useState(src);
  const volume = useVolumeStore((state) => state.volume);
  const [canplay, setCanplay] = useBoolean(false);

  const onDurationChange: ReactEventHandler<HTMLAudioElement> = (e) => {};

  const onLoadedMetadata: ReactEventHandler<HTMLAudioElement> = (e) => {};

  const onProgress: ReactEventHandler<HTMLAudioElement> = () => {
    const buffered = state.buffered.map(({ start, end }) => [start, end]);
    useAudioStore.getState().setAudioBuffered(buffered);
  };

  const onEnded = () => {
    useAudioStore.getState().setAudioNext();
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
    useAudioStore.getState().setAudioNext();
    useAudioStore.getState().setRunErrorAdd();
  };

  const onTimeUpdate: ReactEventHandler<HTMLAudioElement> = (e) => {
    if (dropping) return;
    if (!state.playing) return;
    useAudioStore.getState().setAudioCurrentTime({ currentTime: state.time });
  };

  const onCanPlay = () => {
    setCanplay(true);
  };

  useEffect(() => {
    console.log("音频地址切换");
    return;
    if (online) {
      setUsedSrc(src);
    } else {
      setUsedSrc(src);
    }
  }, [src, online]);

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
      useAudioStore.getState().setAudioRunningPause();
    };
  }, []);

  useEffect(() => {
    if (!jumpTime) return;
    controls.seek(jumpTime);
    useAudioStore.getState().setAudioCurrentTime({ currentTime: jumpTime });
  }, [jumpTime]);

  useEffect(() => {
    controls.volume(volume * 0.01);
  }, [volume]);

  return audio;
};

export default memo(Audio);
