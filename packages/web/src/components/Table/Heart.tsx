import React, { FC, memo } from "react";
import classNames from "classnames";
import { IconHeart } from "@tabler/icons-react";
import { apiLike } from "@/api";
import { useToast } from "@/components/Toast";
import { useAccountStore } from "@/stores";

interface IProps {
  id: number;
  size?: number;
  className?: string;
  stroke?: number;
  title?: string;
}

const Heart: FC<IProps> = ({
  id = "",
  size = 20,
  className = "",
  stroke = 1,
  ...props
}) => {
  const toast = useToast();
  const { likelist } = useAccountStore();
  const handleLike = async () => {
    try {
      const { code, message } = await apiLike({
        id,
        like: !likelist.includes(id),
      });
      if (code !== 200) {
        toast(message);
        return;
      }
      toast(likelist.includes(id) ? "取消喜欢成功" : "已添加到我喜欢的音乐");
      likelist.includes(id)
        ? useAccountStore.getState().setLikelistDel({ id })
        : useAccountStore.getState().setLikelistAdd({ id });
      // const { ids: newlikelist } = await apiLikelist({ uid: profile.userId });
      // dispatch(setLikelist({
      //   likelist: newlikelist,
      // }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      type="button"
      className={classNames(
        className,
        likelist.includes(id)
          ? "text-red-500 hover:text-red-700"
          : "ui_text_gray_hover"
      )}
      onClick={handleLike}
      {...props}
    >
      <IconHeart
        size={size}
        className={classNames({ "fill-current": likelist.includes(id) })}
        stroke={stroke}
      />
    </button>
  );
};

export default memo(Heart);
