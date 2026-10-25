import React, { memo } from "react";

import { useToast } from "@/components/Toast";
import HOCDialog from "../Dialog/Dialog";
import { usePostArtistSubMutation } from "@/modules/services/artist";
import { useMaskStore } from "@/stores";

const UnSubscription = () => {
  const toast = useToast();
  const [subPost, { isLoading: isSubbing }] = usePostArtistSubMutation();
  const { artistId, dialogUnSubscriptionVisibility } = useMaskStore();
  const handleUnSubscription = async () => {
    try {
      await subPost({
        id: artistId,
      });
      useMaskStore.getState().setDialogReset();
      toast("取消收藏！");
    } catch (error) {
      console.log(error);
    }
  };
  if (!dialogUnSubscriptionVisibility) return null;
  return (
    <HOCDialog width={370} title="">
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
