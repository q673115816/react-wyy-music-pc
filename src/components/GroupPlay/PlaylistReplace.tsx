import React from 'react';
import { useDispatch } from 'react-redux';
import { setAudioPlaylist } from '@/reducers/audio/slice';

export default ({ children, playlist, ...props }) => {
  const dispatch = useDispatch();
  const handleAllPlay = () => {
    dispatch(setAudioPlaylist({ playlist }));
  };
  return (
    <button type="button" onClick={handleAllPlay} {...props}>
      {children}
    </button>
  );
};
