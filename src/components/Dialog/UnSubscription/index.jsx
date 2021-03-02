import React, { memo } from 'react';
import { setDialogReset } from '@/reducers/mask/actions';
import { useDispatch, useSelector } from 'react-redux';
import { apiArtistSub } from '@/api';
import HOCDialog from '../Dialog';
import './style.scss';

const UploadAvatar = memo(() => {
  const dispatch = useDispatch();
  const { artistId } = useSelector(({ mask }) => mask);
  // console.log(artistId);
  const handleUnSubscription = async () => {
    try {
      const { code = 200 } = await apiArtistSub({
        id: artistId,
      });
      if (code === 200) {
        dispatch(setDialogReset());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main">
      <div className="content">
        <div className="text-center">确定要取消收藏该歌手？</div>
      </div>
      <div className="actions flex justify-center pt-10 pb-6">
        <button
          type="button"
          className="ui_theme_bg_color text-white rounded-full h-7 w-16"
          onClick={handleUnSubscription}
        >
          确定

        </button>
      </div>
    </div>
  );
});

export default HOCDialog(UploadAvatar, 'dialogUnSubscription', '');
