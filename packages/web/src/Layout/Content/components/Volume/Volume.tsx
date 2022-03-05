import React, { useState, useEffect, memo, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { IconVolume, IconVolume3 } from "@tabler/icons";
import { setVolume, setBeforeMuted } from "@/modules/reducers/volume/slice";
import Panel from "./Panel";

const Volume = () => {
  const dispatch = useAppDispatch();
  const { volume, beforeMuted } = useAppSelector(({ volume }) => volume);
  const [muted, setMuted] = useState(() => volume === 0);

  const [visible, setVisible] = useState(false);

  const handleMutedChange = () => {
    if (muted) {
      dispatch(setVolume(beforeMuted));
    } else {
      dispatch(setVolume(0));
      dispatch(setBeforeMuted(volume));
    }
  };

  const isMuted = useMemo(() => muted || volume === 0, [muted, volume]);

  useEffect(() => {
    if (volume === 0) {
      setMuted(true);
    } else if (muted) {
      setMuted(false);
    }
  }, [volume]);

  return (
    <div
      className="relative flex-center group"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <button
        type="button"
        className="volume_btn"
        title="静音/恢复音量"
        onClick={handleMutedChange}
      >
        {isMuted ? (
          <IconVolume3 size={28} stroke={1} />
        ) : (
          <IconVolume size={28} stroke={1} />
        )}
      </button>
      {visible && <Panel setVisible={setVisible} />}
    </div>
  );
};

export default memo(Volume);
