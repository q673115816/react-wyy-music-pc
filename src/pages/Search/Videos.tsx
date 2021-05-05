import React from 'react';
import DomGridVideo from '@/components/GridVideo';

export default ({ videos = [] }) => {
  const list = videos.map(({
    type, title, coverUrl, playTime, creator, vid, durationms,
  }) => ({
    id: vid,
    type,
    title,
    creator,
    playCount: playTime,
    duration: durationms,
    cover: coverUrl,
  }));
  return (
    <div className="videos_list py-5 px-10">
      <DomGridVideo list={list} />
    </div>
  );
};
