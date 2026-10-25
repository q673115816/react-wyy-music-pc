import React, { FC, memo } from "react";
import { IconVolume, IconVolume3 } from "@tabler/icons-react";
import { useAudioStore } from "@/stores";

interface IProps {
  id: number;
  index: number;
}

const Rank: FC<IProps> = ({ id, index }) => {
  const { currentSong, running } = useAudioStore();
  if (currentSong.id === id) {
    return (
      <div className="ui_themeColor flex justify-end">
        {running ? (
          <IconVolume className="fill-current" size={20} />
        ) : (
          <IconVolume3 className="fill-current" size={20} />
        )}
      </div>
    );
  }
  return (
    <div className="text-gray-300">{String(index + 1).padStart(2, "0")}</div>
  );
};

export default memo(Rank);
