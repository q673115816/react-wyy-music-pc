import React, { memo, useRef, useState, useEffect, useCallback } from "react";
import { apiSongUrl, apiLyric } from "@/api";
import {
  setAudioCurrentTime,
  setAudioBuffered,
  setAudioCurrent,
  setAudioRunning,
  setAudioNext,
  setRunErrorAdd,
  setRunErrorDesc,
} from "@/reducers/audio/slice";
import { setLyricText } from "@/reducers/lrc/slice";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";

export default memo(() => {
  console.log("init audio");

  const dispatch = useAppDispatch();
  const {
    currentSong,
    running,
    dropping,
    currentTime,
    jumpTime,
    pattern,
    errorCount,
  } = useAppSelector(({ audio }) => audio);
  const { volume } = useAppSelector(({ volume }) => volume);
  const RefCanPlay = useRef(false);
  const RefDropping = useRef();
  const refAudio = useRef<HTMLAudioElement>(new Audio());

  const handleGetUrl = async () => {
    // refAudio.current.pause()
    try {
      const { data } = await apiSongUrl({
        id: currentSong.id,
      });
      if (!data[0].url) console.log("无音乐地址");
      refAudio.current.src =
        data[0]?.url ||
        `https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`;
      const lyric = await apiLyric({
        id: currentSong.id,
      });
      dispatch(setLyricText({ lyric }));
      // refAudio.current.play();
      // dispatch(setAudioRunning({ running: true }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadedMetadata = useCallback(({ target }) => {
    if (running) target.play();
  }, []);

  const handleProgress = useCallback(({ target }) => {
    const buffered = [];
    for (let i = 0; i < target.buffered.length; i += 1) {
      const onebuffered = [target.buffered.start(i), target.buffered.end(i)];
      buffered.push(onebuffered);
      // console.log(onebuffered);
    }
    // const buffered = e.target.buffered.end(e.target.buffered.length - 1);
    dispatch(setAudioBuffered(buffered));
  }, []);

  const handleRunningFollow = ({ target }) => {
    dispatch(setAudioCurrentTime(target.currentTime));
  };

  const handleEnded = useCallback((e) => {
    dispatch(setAudioNext());
    // dispatch(setAudioCurrentTime(0));
    // switch (pattern) {
    //   case 0:

    //     break;
    //   case 2:
    //     refAudio.current.play();
    //     break;
    //   default:
    //     break;
    // }
  }, []);

  const handleReGet = useCallback(() => {
    console.log("出现错误，切换下一首");
    if (errorCount >= 5) {
      // TODO
      console.log("出错过多");
    }
    dispatch(setAudioNext());
    dispatch(setRunErrorAdd());
    // handleGetUrl();
  }, []);

  const handleSetCanPlay = useCallback(() => {
    RefCanPlay.current = true;
  }, []);

  useEffect(() => {
    RefDropping.current = dropping;
  }, [dropping]);

  useEffect(() => {
    if (!refAudio.current) return;
    if (!RefCanPlay.current) return;
    if (running) {
      if (currentTime) {
        refAudio.current.currentTime = currentTime;
      }
      refAudio.current.play();
      refAudio.current.addEventListener("timeupdate", handleRunningFollow);
    } else {
      refAudio.current.pause();
      refAudio.current.removeEventListener("timeupdate", handleRunningFollow);
    }
  }, [running]);

  useEffect(() => {
    if (!jumpTime) return;
    if (!refAudio.current) return;
    refAudio.current.currentTime = jumpTime;
  }, [jumpTime]);

  useEffect(() => {
    if (!refAudio.current) return;
    refAudio.current.volume = volume * 0.01;
  }, [volume]);

  useEffect(() => {
    if (currentSong.id) {
      handleGetUrl();
    }
  }, [currentSong]);

  useEffect(() => {
    const { current: audio } = refAudio;
    audio.addEventListener("canplay", handleSetCanPlay);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("progress", handleProgress);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleReGet);
  }, []);
  return <></>;
});
