import React, { memo } from "react";
import { setDialogReset, setToast } from "@/modules/reducers/mask/slice";
import HOCDialog from "../Dialog/Dialog";
import "./style.scss";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";
import { usePostArtistSubMutation } from "@/modules/services/artist";

const UnSubscription = () => {
  const dispatch = useAppDispatch();
  const [subPost, { isLoading: isSubbing }] = usePostArtistSubMutation();
  const { artistId, dialogUnSubscriptionVisibility } = useAppSelector(
    ({ mask }) => mask
  );
  const handleUnSubscription = async () => {
    try {
      await subPost({
        id: artistId,
      });
      dispatch(setDialogReset());
      dispatch(setToast("取消收藏！"));
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
};

export default memo(UnSubscription);
