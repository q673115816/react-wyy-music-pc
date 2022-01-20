import React, { useRef, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { IconChevronUp, IconChevronDown } from "@tabler/icons";
import { setLyricText, setLyricToggle } from "@/reducers/lrc/slice";
import Heart from "@/components/Table/Heart";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";
import Audio from "./Audio";
const Left = () => {
  const dispatch = useAppDispatch();
  const { currentSong, dropping, playlist } = useAppSelector(
    ({ audio }) => audio
  );
  const { lyricVisibility } = useAppSelector(({ lrc }) => lrc);

  const handleLyric = () => {
    dispatch(setLyricToggle());
  };

  // if (playlist.length === 0) return null;
  return (
    <div className="flex p-2.5 flex-1">
      <div hidden>
        <Audio />
      </div>
      {!!currentSong?.name && (
        <>
          <button
            type="button"
            onClick={handleLyric}
            className="w-12 h-12 relative group rounded overflow-hidden"
          >
            <img
              src={currentSong.al.picUrl}
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
                  {currentSong.alia.length > 0 && (
                    <span className="text-gray-300">
                      {`（${currentSong.alia}）`}
                    </span>
                  )}
                </span>
              </button>
              <Heart id={currentSong.id} />
            </div>
            <div className="truncate mt-1">
              {currentSong.ar.map((artist, index) => (
                <span className="" key={artist.id}>
                  {index > 0 && " / "}
                  <Link
                    to={`/artist/${artist.id}`}
                    className="text-sm text-gray-600"
                  >
                    {artist.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Left);
