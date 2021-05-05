import React from 'react';
import { useDispatch } from 'react-redux';
import { setAudioPlaylist } from '@/reducers/audio/actions';
import { apiPlaylistDetail, apiSongDetail } from '@/api';

export default ({ children, id, ...props }) => {
  const dispatch = useDispatch();
  const handleAllPlay = async () => {
    const data = await apiPlaylistDetail({
      id,
    });
    if (data.playlist.trackCount === 0) return false;
    const { songs: playlist } = await apiSongDetail({
      ids: data.playlist.trackIds.map(({ id }) => id),
    });
    return dispatch(setAudioPlaylist({ playlist }));
  };
  return (
    <button type="button" onClick={handleAllPlay} {...props}>
      {children}
    </button>
  );
};
