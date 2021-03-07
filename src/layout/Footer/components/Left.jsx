import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  IconArrowsDiagonal,
  IconArrowsDoubleNeSw,
  IconHeart,
} from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { apiSongUrl } from '@/api';
import { setAudioCurrentTime, setAudioBuffered } from '@/reducers/audio/actions';

export default () => {
  const dispatch = useDispatch();
  const {
    volume,
    currentSong,
    playlist,
    running,
    currentTime,
  } = useSelector(({ audio }) => audio);

  const refAudio = useRef();

  const handleGetUrl = async () => {
    try {
      const { data } = await apiSongUrl({
        id: currentSong.id,
      });
      refAudio.current.src = data[0].url;
      // refAudio.current.play();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInitCurrentTime = () => {
    if (currentTime !== 0) {
      console.log(currentTime);
      refAudio.current.currentTime = currentTime;
      console.log(refAudio.current);
    }
  };

  useEffect(() => {
    refAudio.current.volume = volume * 0.01;
  }, [volume]);

  const handleRunningFollow = (e) => {
    dispatch(setAudioCurrentTime(e.target.currentTime));
  };

  useEffect(() => {
    refAudio.current.addEventListener('progress', (e) => {
      const buffered = e.target.buffered.end(e.target.buffered.length - 1);
      dispatch(setAudioBuffered(buffered));
    });
  }, []);

  useEffect(() => {
    if (running) {
      refAudio.current.play();
      refAudio.current.addEventListener('timeupdate', handleRunningFollow);
    } else {
      refAudio.current.pause();
      refAudio.current.removeEventListener('timeupdate', handleRunningFollow);
    }
  }, [running]);

  useEffect(() => {
    if (currentSong.id) {
      handleGetUrl();
      handleInitCurrentTime();
      // refAudio.current.play();
    }
    // refAudio.srcObject =
  }, [currentSong]);
  return (
    <div className="domfooter_left flex p-3 flex-1">
      <div hidden>
        <audio
          ref={refAudio}
        />
      </div>
      {playlist.length > 0
        && (
          <>
            <Link to="/" className="domfooter_left_img relative group rounded overflow-hidden">
              <img src={currentSong.al.picUrl} alt="" />
              <div className="absolute opacity-0 inset-0 flex-center bg-black group-hover:opacity-60" />
              <div className="absolute opacity-0 inset-0 flex-center group-hover:opacity-100 text-white">
                <IconArrowsDiagonal size={24} />
                <IconArrowsDoubleNeSw size={24} />
              </div>
            </Link>
            <div className="domfooter_left_info pl-3">
              <div className="domfooter_left_info_name text-base flex items-center w-44">
                <button type="button" className="group truncate">
                  <span className="text-gray-600 group-hover:text-black">
                    {currentSong.name}
                    {
                      currentSong.alia.length > 0
                      && (
                        <span className="text-gray-300">
                          (
                          {currentSong.alia.map((alia) => alia)}
                          )
                        </span>
                      )
                    }
                  </span>
                </button>
                <button type="button" className="text-gray-600 hover:text-black">
                  <IconHeart size={20} stroke={1} />
                </button>
              </div>
              <div className="truncate w-44">
                {currentSong.ar.map((artist, index) => (
                  <span className="" key={artist.id}>
                    {index > 0 && ' / '}
                    <Link
                      to={`/artist/${artist.id}`}
                      className="domfooter_left_info_singer text-sm text-gray-600"
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
