import { useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useAudioStore, useVolumeStore } from "@/stores";

const useKeyActions = () => {
  const setVolumePlusTen = useVolumeStore((s) => s.setVolumePlusTen);
  const setVolumeSubTen = useVolumeStore((s) => s.setVolumeSubTen);

  useHotkeys("ctrl+up", setVolumePlusTen, { preventDefault: true });
  useHotkeys("ctrl+down", setVolumeSubTen, { preventDefault: true });
  useHotkeys(
    "ctrl+left",
    () => useAudioStore.getState().setAudioPrev(),
    { preventDefault: true }
  );
  useHotkeys(
    "ctrl+right",
    () => useAudioStore.getState().setAudioNext(),
    { preventDefault: true }
  );
  useHotkeys(
    "ctrl+p",
    () => useAudioStore.getState().setAudioRunningToggle(),
    { preventDefault: true }
  );

  useEffect(() => {
    const contextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", contextMenu);
    return () => document.removeEventListener("contextmenu", contextMenu);
  }, []);
};

export default useKeyActions;
