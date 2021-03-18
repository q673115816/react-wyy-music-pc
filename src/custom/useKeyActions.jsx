import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setVolumePlusTen, setVolumeSubTen } from '@/reducers/audio/actions';

export default () => {
  const dispatch = useDispatch();
  // console.log('keyActions');
  const keyDown = ({ ctrlKey, keyCode }) => {
    if (ctrlKey) {
      switch (keyCode) {
        case 38:
          return dispatch(setVolumePlusTen());
        case 40:
          return dispatch(setVolumeSubTen());
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
