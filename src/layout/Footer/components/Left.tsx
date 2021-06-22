import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconChevronUp,
  IconChevronDown,
} from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { apiSongUrl, apiLyric } from '@/api';
import {
  setAudioCurrentTime,
  setAudioBuffered,
  setAudioCurrent,
  setAudioRunning,
  setAudioNext,
  setRunErrorAdd,
  setRunErrorDesc,
} from '@/reducers/audio/actions';
import { setLyricText, setLyricToggle } from '@/reducers/lrc/actions';
import DomHeart from '@/components/Table/Heart';

export default () => {
  const dispatch = useDispatch();
  const {
    currentSong,
    running,
    dropping,
    currentTime,
    jumpTime,
    pattern,
    errorCount,
  } = useSelector(({ audio }) => audio);
  const { volume } = useSelector(({ volume }) => volume);
  const { lyricVisibility } = useSelector(({ lrc }) => lrc);
  const [ audioReady, setAudioReady] = useState(false)
  const RefDropping = useRef();
  const refAudio = useRef();

  const handleGetUrl = async () => {
    // refAudio.current.pause()
    try {
      const { data } = await apiSongUrl({
        id: currentSong.id,
      });
      if (!data[0].url) console.log('无音乐地址');
      refAudio.current.src = data[0]?.url || `https://music.163.com/song/media/outer/url?id=${currentSong.id}.mp3`;
      const lyric = await apiLyric({
        id: currentSong.id,
      });
      dispatch(setLyricText({ lyric }));
      // refAudio.current.play();
      // dispatch(setAudioRunning({ running: true }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadedMetadata = (e) => {
    if (running) e.target.play();
  };

  const handleProgress = ({ target }) => {
    const buffered = [];
    for (let i = 0; i < target.buffered.length; i += 1) {
      const onebuffered = [target.buffered.start(i), target.buffered.end(i)];
      buffered.push(onebuffered);
      // console.log(onebuffered);
    }
    // const buffered = e.target.buffered.end(e.target.buffered.length - 1);
    dispatch(setAudioBuffered(buffered));
  };

  const handleRunningFollow = (e) => {
    !RefDropping.current && dispatch(setAudioCurrentTime(e.target.currentTime));
  };

  const handleEnded = (e) => {
    dispatch(setAudioNext());
    // dispatch(setAudioCurrentTime(0));
    // switch (pattern) {
    //   case 0:

    //     break;
    //   case 2:
    //     refAudio.current.play();
    //     break;
    //   default:
    //     break;
    // }
  };

  const handleLyric = () => {
    dispatch(setLyricToggle());
  };

  const handleReGet = () => {
    console.log('出现错误，切换下一首');
    if (errorCount >= 5) {
      // TODO
      console.log('出错过多');
    }
    dispatch(setAudioNext());
    dispatch(setRunErrorAdd());
    // handleGetUrl();
  };

  useEffect(() => {
    RefDropping.current = dropping;
  }, [dropping]);

  useEffect(() => {
    if(!audioReady) return
    if (running) {
      if (currentTime) {
        refAudio.current.currentTime = currentTime;
      }
      refAudio.current.play();
      refAudio.current.addEventListener('timeupdate', handleRunningFollow);
    } else {
      refAudio.current.pause();
      refAudio.current.removeEventListener('timeupdate', handleRunningFollow);
    }
  }, [running, audioReady]);

  useEffect(() => {
    if (jumpTime) {
      refAudio.current.currentTime = jumpTime;
    }
  }, [jumpTime]);

  useEffect(() => {
    refAudio.current.volume = volume * 0.01;
  }, [volume]);

  useEffect(() => {
    if (currentSong.id) {
      handleGetUrl();
    }
  }, [currentSong]);
  return (
    <div className="domfooter_left flex p-2.5 flex-1">
      <div hidden>
        <audio
          ref={refAudio}
          onLoadedMetadata={handleLoadedMetadata}
          onProgress={handleProgress}
          onEnded={handleEnded}
          onError={handleReGet}
          onCanPlay={() => setAudioReady(true)}
        />
      </div>
      {!!currentSong?.name
        && (
          <>
            <button
              type="button"
              onClick={handleLyric}
              className="domfooter_left_img w-12 h-12 relative group rounded overflow-hidden"
            >
              <img src={currentSong.al.picUrl} className="w-full h-full object-cover" alt="" />
              <div className="absolute opacity-0 inset-0 flex-center bg-black group-hover:opacity-60" />
              <div className="absolute opacity-0 inset-0 flex-center group-hover:opacity-100 text-white">
                {
                  lyricVisibility
                    ? <IconChevronDown size={24} />
                    : <IconChevronUp size={24} />
                }
              </div>
            </button>
            <div className="domfooter_left_info pl-3 w-44">
              <div className="domfooter_left_info_name text-base flex items-center">
                <button type="button" className="group truncate" onClick={handleLyric}>
                  <span className="ui_text_black_hover">
                    {currentSong.name}
                    {
                      currentSong.alia.length > 0
                      && (
                        <span className="text-gray-300">
                          {`（${currentSong.alia}）`}
                        </span>
                      )
                    }
                  </span>
                </button>
                <DomHeart id={currentSong.id} />
              </div>
              <div className="truncate mt-1">
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
