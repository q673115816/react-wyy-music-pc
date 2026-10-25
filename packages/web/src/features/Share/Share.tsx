import React, { memo, useEffect } from "react";
import { Navigate, useParams } from "react-router";

import { apiSongDetail } from "@/api";
import Songs from "../Search/Songs";
import { useAudioStore } from "@/stores";

export default memo(function Share() {
  const { type, id } = useParams();
  const router = {
    music: async () => {
      const {
        songs: [song],
      } = await apiSongDetail({ ids: id });
      useAudioStore.getState().setAudioImmediate({
          currentSong: song,
        })
      ;
    },
  };
  useEffect(() => {
    (async () => {
      try {
        await router[type as keyof typeof router]?.();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [type, id]);

  return <Navigate to="/" />;
});
