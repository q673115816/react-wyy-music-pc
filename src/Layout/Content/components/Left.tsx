import React, { memo, useEffect } from "react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons";
import { setLyricText, setLyricToggle } from "@/modules/reducers/lrc/slice";
import Heart from "@/components/Table/Heart";
import Artists from "@/components/Table/Artists";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import {
  useGetLyricMutation,
  useGetSongUrlMutation,
} from "@/modules/services/song";
import { audioSelector, setAudioSrc } from "@/modules/reducers/audio/slice";
const Left = () => {
  const dispatch = useAppDispatch();
  const { currentSong, playlist } = useAppSelector(audioSelector);
  const { lyricVisibility } = useAppSelector(({ lrc }) => lrc);
  const [songUrlGet, {}] = useGetSongUrlMutation();
  const [LyricGet, {}] = useGetLyricMutation();
  const handleLyric = () => {
    dispatch(setLyricToggle());
  };

  const handleGetUrl = async () => {
    const id = currentSong?.id;
    if (!id) return null;
    try {
      const url = await songUrlGet({
        id,
      });
      if (!url?.data?.[0]?.url) console.log("无音乐地址");
      const src =
        url?.data?.[0]?.url ||
        `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
      dispatch(setAudioSrc({ src }));
      const lyric = await LyricGet({
        id,
      });
      dispatch(setLyricText({ lyric: lyric.data }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUrl();
  }, [currentSong]);

  if (playlist.length === 0) return <div className={`flex-1`} />;
  if (!currentSong) return null;
  return (
    <div className="flex p-2.5 flex-1">
      <button
        type="button"
        onClick={handleLyric}
        className="w-12 h-12 relative group rounded overflow-hidden"
      >
        <img
          src={currentSong?.al?.picUrl}
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute opacity-0 inset-0 flex-center bg-black group-hover:opacity-60" />
        <div className="absolute opacity-0 inset-0 flex-center group-hover:opacity-100 text-white">
          {lyricVisibility ? (
            <IconChevronDown size={24} />
          ) : (
            <IconChevronUp size={24} />
          )}
        </div>
      </button>
      <div className="pl-3 w-44">
        <div className="text-base flex items-center">
          <button
            type="button"
            className="group truncate"
            onClick={handleLyric}
          >
            <span className="ui_text_black_hover">
              {currentSong.name}
              {currentSong.alia?.length > 0 && (
                <span className="text-gray-300">
                  {`（${currentSong.alia}）`}
                </span>
              )}
            </span>
          </button>
          <Heart id={currentSong.id} />
        </div>
        <Artists artists={currentSong.ar} className={`mt-1`} />
      </div>
    </div>
  );
};

export default memo(Left);
