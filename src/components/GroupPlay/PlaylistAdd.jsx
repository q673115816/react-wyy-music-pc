import React from 'react';
import { useDispatch } from 'react-redux';
import { setAudioPlaylistAdd } from '@/reducers/audio/actions';

export default ({ children, playlist, ...props }) => {
  const dispatch = useDispatch();
  const handleAllAdd = () => {
    dispatch(setAudioPlaylistAdd({ playlist }));
  };
  return (
    <button type="button" onClick={handleAllAdd} {...props}>
      {children}
    </button>
  );
};
