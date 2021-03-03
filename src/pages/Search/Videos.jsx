import React from 'react';
import DomGridVideo from '@/components/GridVideo';

const type = {
  0: 'mv',
  1: 'video',
};

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
        // artists: 'creator',
      }}
    />
  </div>
);
