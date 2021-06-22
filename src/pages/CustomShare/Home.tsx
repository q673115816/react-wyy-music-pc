import { memo } from "react";
import { Redirect } from 'react-router-dom'
import { setAudioImmediate, setAudioImmediateNext } from '@/reducers/audio/actions';

import { apiSongDetail } from '@/api'
import { useDispatch } from "react-redux";
import Songs from "../Search/Songs";

export default memo(({ type, id }) => {
  const dispatch = useDispatch()
  const router = {
    music: async () => {
      const {songs: [song]} = await apiSongDetail({ids: id})
      dispatch(setAudioImmediate({
        currentSong: song,
      }))
    }
  }
  ;(async (type) => await router[type]())(type);

  return <Redirect to="/" />

})
