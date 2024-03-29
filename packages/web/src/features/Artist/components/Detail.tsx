import React, { memo } from "react";
import { IconFolderPlus, IconCheckbox } from "@tabler/icons";
import { Link, useParams } from "react-router-dom";
import { setDialogUnSubscriptionShow } from "@/modules/reducers/mask/slice";
import { useAppDispatch } from "@/modules/hooks";
import {
  useGetArtistDetailQuery,
  usePostArtistSubMutation,
} from "@/modules/services/artist";
import { useToast } from "@/components/Toast";

const Detail = () => {
  const { id = "" } = useParams();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const [subPost, { isLoading: isSubbing }] = usePostArtistSubMutation();
  const { data } = useGetArtistDetailQuery({ id });
  const detail = data?.data || {};
  const isFollowed = detail?.user?.followed || false;
  const handleUnSubscription = () => {
    dispatch(
      setDialogUnSubscriptionShow({
        artistId: id,
      })
    );
  };

  const handleSubscription = async () => {
    try {
      await subPost({
        id,
        t: 1,
      });
      toast("收藏成功！");
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleSub = async () => {
    isFollowed ? handleUnSubscription() : await handleSubscription();
  };

  return (
    <div className="domArtist_header flex p-8">
      <div className="w-44 h-44 border overflow-hidden rounded">
        <img src={`${detail.artist?.cover}?param=200y200`} alt="" />
      </div>
      <div className="content flex-auto px-5">
        <div className="name h1 select-text">{detail.artist?.name}</div>
        <div className="enname my-3 select-text">
          {detail.alias?.map((alia) => alia)}
        </div>
        <div className="actions mt-3 flex space-x-2">
          <button
            onClick={handleToggleSub}
            type="button"
            className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm"
          >
            {isFollowed ? (
              <>
                <IconCheckbox size={20} stroke={1} />
                已收藏
              </>
            ) : (
              <>
                <IconFolderPlus size={20} stroke={1} />
                收藏
              </>
            )}
          </button>
          {detail.user && (
            <Link
              to={`/user/${detail.user?.userId}`}
              className="ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm"
            >
              个人主页
            </Link>
          )}
        </div>
        <div className="info mt-5 space-x-5">
          <span className="size">
            单曲数:
            {detail?.artist?.musicSize}
          </span>
          <span className="size">
            专辑数:
            {detail.artist?.albumSize}
          </span>
          <span className="size">
            MV数:
            {detail.artist?.mvSize}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Detail);
