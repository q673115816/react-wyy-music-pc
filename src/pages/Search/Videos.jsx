import React from 'react';
import DomGridVideo from '@/components/GridVideo';

export default ({ videos = [] }) => (
  <div className="videos_list">
    <DomGridVideo
      list={videos}
      options={{
        id: 'vid',
        name: 'title',
        playCount: 'playTime',
        src: 'coverUrl',
        duration: 'durationms',
        artists: 'creator',
      }}
    />
  </div>
);
