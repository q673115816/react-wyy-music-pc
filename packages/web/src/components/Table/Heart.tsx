import React, { FC, memo } from "react";
import classNames from "classnames";
import { IconHeart } from "@tabler/icons";
import { apiLike } from "@/api";
import { useToast } from "@/components/Toast";
import {
  setLikelistAdd,
  setLikelistDel,
} from "@/modules/reducers/account/slice";
import { useAppDispatch, useAppSelector } from "@/modules/hooks";

interface IProps {
  id: number;
  size?: number;
  className?: string;
  stroke?: number;
}

const Heart: FC<IProps> = ({
  id = "",
  size = 20,
  className = "",
  stroke = 1,
}) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { likelist } = useAppSelector(({ account }) => account);
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
        ? dispatch(setLikelistDel({ id }))
        : dispatch(setLikelistAdd({ id }));
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
