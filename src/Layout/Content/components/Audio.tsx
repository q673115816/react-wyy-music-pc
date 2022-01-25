import React, {
  memo,
  MouseEventHandler,
  ReactEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  setAudioBuffered,
  setAudioCurrentTime,
  setAudioNext,
  setRunErrorAdd,
} from "@/modules/reducers/audio/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { apiLyric, apiSongUrl } from "@/api";
import { setLyricText } from "@/modules/reducers/lrc/slice";

const Audio = () => {
  const dispatch = useAppDispatch();
  const { currentSong, running, dropping, currentTime, jumpTime, errorCount } =
    useAppSelector(({ audio }) => audio);
  const { volume } = useAppSelector(({ volume }) => volume);

  const [audioReady, setAudioReady] = useState(false);
  const RefAudio = useRef(null);
  // console.log("currentTime:", currentTime);
  const handleDurationChange: ReactEventHandler<HTMLAudioElement> = (e) => {
    // console.log("handleDurationChange", e);
  };

  const handleLoadedMetadata: ReactEventHandler<HTMLAudioElement> = (e) => {
    if (running) e.currentTarget.play();
  };

  const handleProgress: ReactEventHandler<HTMLAudioElement> = (e) => {
    const { target } = e;
    const buffered = [];
    for (let i = 0; i < target.buffered.length; i += 1) {
      const onebuffered = [target.buffered.start(i), target.buffered.end(i)];
      buffered.push(onebuffered);
    }
    // const buffered = e.target.buffered.end(e.target.buffered.length - 1);
    dispatch(setAudioBuffered(buffered));
  };

  const handleEnded = () => {
    dispatch(setAudioNext());
  };

  const handleReGet = () => {
    console.log("出现错误，切换下一首");
    if (errorCount >= 5) {
      // TODO
      console.log("出错过多");
    }
    dispatch(setAudioNext());
    dispatch(setRunErrorAdd());
  };

  const handleGetUrl = async () => {
    try {
      const { data } = await apiSongUrl({
        id: currentSong.id,
      });
      if (!data[0].url) console.log("无音乐地址");
      RefAudio.current.src =
        data[0]?.url ||
        `https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`;
      const lyric = await apiLyric({
        id: currentSong.id,
      });
      dispatch(setLyricText({ lyric }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentSong.id) {
      handleGetUrl();
    }
  }, [currentSong]);

  const handleRunningFollow: ReactEventHandler<HTMLAudioElement> = (e) => {
    // console.log("handleRunningFollow", e.target.currentTime, running);
    if (dropping) return;
    if (!running) return;
    dispatch(setAudioCurrentTime(e.target.currentTime));
  };

  useEffect(() => {
    if (!RefAudio.current) return;
    if (!audioReady) return;
    if (running && currentTime) {
      RefAudio.current.currentTime = currentTime;
    }
  }, [running, audioReady]);

  useEffect(() => {
    if (running && RefAudio.current.pause) RefAudio.current.play();
    if (!running && RefAudio.current.play) RefAudio.current.pause();
  }, [running]);

  useEffect(() => {
    if (running) RefAudio.current.play();
    else RefAudio.current.pause();
  }, [running]);

  useEffect(() => {
    if (!jumpTime) return;
    if (!RefAudio.current) return;
    RefAudio.current.currentTime = jumpTime;
  }, [jumpTime]);

  useEffect(() => {
    RefAudio.current.volume = volume * 0.01;
  }, [volume]);

  return (
    <audio
      ref={RefAudio}
      onDurationChange={handleDurationChange}
      onLoadedMetadata={handleLoadedMetadata}
      onProgress={handleProgress}
      onEnded={handleEnded}
      onError={handleReGet}
      onTimeUpdate={handleRunningFollow}
      onCanPlay={() => setAudioReady(true)}
    />
  );
};

export default memo(Audio);
