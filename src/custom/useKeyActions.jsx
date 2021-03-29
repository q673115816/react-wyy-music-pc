import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setVolumePlusTen, setVolumeSubTen, setAudioRunningToggle } from '@/reducers/audio/actions';

export default () => {
  const dispatch = useDispatch();
  // console.log('keyActions');
  const keyDown = (e) => {
    const { ctrlKey, keyCode } = e;
    // console.log(keyCode);
    if (ctrlKey) {
      switch (keyCode) {
        case 38:// 音量
          return dispatch(setVolumePlusTen());
        case 40:// 音量
          return dispatch(setVolumeSubTen());
        case 80:
          e.preventDefault();// 原为打印
          return dispatch(setAudioRunningToggle());
        default:
          break;
      }
    }
    return true;
  };
  useEffect(() => {
    document.addEventListener('keydown', keyDown);
    return () => {
      document.removeEventListener('keydown', keyDown);
    };
  }, []);
};
