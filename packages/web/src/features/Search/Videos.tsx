import React, {FC, memo} from "react";
import GridVideo from "@/components/GridVideo";

interface iProps {
  videos: []
}

const Videos: FC<iProps> = ({ videos = [] }) => {
  const list = videos.map(
    ({ type, title, coverUrl, playTime, creator, vid, durationms }) => ({
      id: vid,
      type,
      title,
      creator,
      playCount: playTime,
      duration: durationms,
      cover: coverUrl,
    })
  );
  return (
    <div className="videos_list py-5 px-10">
      <GridVideo list={list} />
    </div>
  );
};

export default memo(Videos)
