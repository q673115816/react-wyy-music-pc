import React, {
  useState,
  useEffect,
  useRef,
  memo,
  useMemo,
  MouseEventHandler,
} from "react";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import { IconVolume, IconVolume3 } from "@tabler/icons";
import { setVolume, setBeforeMuted } from "@/reducers/volume/slice";
import { computedPositionPercentage, isInTheRect } from "@/common/utils";
import Drag from "@/components/Drag";

const Ico = memo<{ isMuted: boolean }>(({ isMuted }) =>
  isMuted ? (
    <IconVolume3 size={28} stroke={1} />
  ) : (
    <IconVolume size={28} stroke={1} />
  )
);

interface iPanelProps {
  visible: boolean;
  setVisible: (bool: boolean) => void;
}

const Panel = memo<iPanelProps>(({ visible, setVisible }) => {
  const dispatch = useAppDispatch();
  const { volume } = useAppSelector(({ volume }) => volume);
  const [dragger, SetDragger] = useState(false);
  const RefRect = useRef<HTMLDivElement>(null);
  const RefProgress = useRef<HTMLDivElement>(null);

  if (!(visible || dragger)) return null;
  const computedPosition = (e: MouseEvent) => {
    const { current: dom } = RefProgress;
    if (!dom) return 0;
    const percentage = computedPositionPercentage(e, dom, "y");
    return percentage * 100;
  };

  const onMouseMove: MouseEventHandler = (e) => {
    dispatch(setVolume(computedPosition(e)));
  };

  const onMouseUp: MouseEventHandler = (e) => {
    SetDragger(false);
    const { current: dom } = RefRect;
    if (dom && isInTheRect(e, dom)) setVisible(true);
  };

  const onMouseDown: MouseEventHandler = () => {
    SetDragger(true);
  };

  return (
    <div
      className="w-8 h-24 flex-center absolute bottom-full bg-white rounded shadow z-50"
      ref={RefRect}
    >
      <div
        className="bg-gray-200 flex flex-col h-20 justify-end w-1"
        title="音量调节（Ctrl + Up / Ctrl + Down）"
        onMouseDown={onMouseMove}
        ref={RefProgress}
      >
        <div
          className="curr width-full h-full ui_theme_bg_color relative"
          style={{ height: `${volume}%` }}
        >
          <Drag
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            className="absolute right-1/2 top-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 ui_theme_bg_color rounded-full"
          />
        </div>
      </div>
    </div>
  );
});

export default memo(() => {
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
        <Ico isMuted={isMuted} />
      </button>
      {<Panel visible={visible} setVisible={setVisible} />}
    </div>
  );
});
