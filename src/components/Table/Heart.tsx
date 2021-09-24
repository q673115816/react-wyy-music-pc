import React, { memo } from "react";
import classNames from "classnames";
import { IconHeart } from "@tabler/icons";
import { apiLike } from "@/api";
import { setToast } from "@/reducers/mask/slice";
import { setLikelistAdd, setLikelistDel } from "@/reducers/account/slice";
import { useAppDispatch, useAppSelector } from "@/reducers/hooks";

interface IProps {
  id: string;
  size: number;
  className: string;
  stroke: number;
}

export default memo<IProps>(
  ({ id = "", size = 20, className = "", stroke = 1 }) => {
    const dispatch = useAppDispatch();

    const { likelist } = useAppSelector(({ account }) => account);
    const handleLike = async () => {
      try {
        const { code, message } = await apiLike({
          id,
          like: !likelist.includes(id),
        });
        if (code !== 200) {
          dispatch(setToast(message));
          return;
        }
        dispatch(
          setToast(likelist.has(id) ? "取消喜欢成功" : "已添加到我喜欢的音乐")
        );
        likelist.has(id)
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
  }
);
