import React, { memo } from 'react';
import { setDialogReset, setToast } from '@/reducers/mask/actions';
import { useDispatch, useSelector } from 'react-redux';
import { apiArtistSub } from '@/api';
import { useRefreshArtistSublist } from '@/hooks/useHelp';
import HOCDialog from '../Dialog';
import './style.scss';

export default memo(() => {
  const dispatch = useDispatch();
  const { artistId, dialogUnSubscriptionVisibility } = useSelector(({ mask }) => mask);
  // console.log(artistId);
  const handleUnSubscription = async () => {
    try {
      await apiArtistSub({
        id: artistId,
      });
      dispatch(setDialogReset());
      dispatch(setToast('取消收藏！'));
      useRefreshArtistSublist(dispatch);
    } catch (error) {
      console.log(error);
    }
  };
  if (!dialogUnSubscriptionVisibility) return null;
  return (
    <HOCDialog id="dialogUnSubscription" title="">
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
    </HOCDialog>
  );
});
