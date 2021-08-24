import React from 'react';
import { setAudioPlaylistAdd } from '@/reducers/audio/slice';
import {useAppDispatch} from "@/reducers/hooks";

export default ({ children, playlist, ...props }) => {
  const dispatch = useAppDispatch();
  const handleAllAdd = () => {
    dispatch(setAudioPlaylistAdd({ playlist }));
  };
  return (
    <button type="button" onClick={handleAllAdd} {...props}>
      {children}
    </button>
  );
};
