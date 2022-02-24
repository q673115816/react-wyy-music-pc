import React, { memo } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  setAudioImmediate,
  setAudioImmediateNext,
} from "@/modules/reducers/audio/slice";

import { apiSongDetail } from "@/api";
import Songs from "../Search/Songs";
import { useAppDispatch } from "@/modules/hooks";

export default memo(function Share() {
  const { type, id } = useParams();
  const dispatch = useAppDispatch();
  const router = {
    music: async () => {
      const {
        songs: [song],
      } = await apiSongDetail({ ids: id });
      dispatch(
        setAudioImmediate({
          currentSong: song,
        })
      );
    },
  };
  (async (type) => await router[type]())(type);

  return <Navigate to="/" />;
});
