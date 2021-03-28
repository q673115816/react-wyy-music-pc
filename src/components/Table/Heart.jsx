import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { IconHeart } from '@tabler/icons';
import { apiLike } from '@/api';
import { setToast } from '@/reducers/mask/actions';
import {
  setLikelistAdd,
  setLikelistDel,
} from '@/reducers/account/actions';

export default ({ item = {} }) => {
  const dispatch = useDispatch();

  const { likelist } = useSelector(({ account }) => account);
  const handleLike = async () => {
    try {
      const { code, message } = await apiLike({
        id: item.id,
        like: !likelist.has(item.id),
      });
      if (code !== 200) {
        dispatch(setToast({
          toastTitle: message,
        }));
        return;
      }
      dispatch(setToast({
        toastTitle: likelist.has(item.id) ? '取消喜欢成功' : '已添加到我喜欢的音乐',
      }));
      likelist.has(item.id)
        ? dispatch(setLikelistDel({ id: item.id }))
        : dispatch(setLikelistAdd({ id: item.id }));
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
      className={classNames(likelist.has(item.id) ? 'text-red-500 hover:text-red-700' : 'ui_text_gray_hover')}
      onClick={handleLike}
    >
      <IconHeart
        size={20}
        className={classNames({ 'fill-current': likelist.has(item.id) })}
        stroke={1}
      />
    </button>
  );
};
