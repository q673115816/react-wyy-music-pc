import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { IconHeart } from '@tabler/icons';
import { apiLike } from '@/api';
import { setToast } from '@/reducers/mask/actions';

export default ({ item = {} }) => {
  const dispatch = useDispatch();

  const { likelist } = useSelector(({ account }) => account);
  const handleLike = async () => {
    try {
      const { code, message } = await apiLike({
        id: item.id,
        like: !likelist.includes(item.id),
      });
      if (code !== 200) {
        dispatch(setToast({
          toastTitle: message,
        }));
        return;
      }
      dispatch(setToast({
        toastTitle: likelist.includes(item.id) ? '取消喜欢成功' : '已添加到我喜欢的音乐',
      }));
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
      className={classNames(likelist.includes(item.id) ? 'text-red-500 hover:text-red-700' : 'text-gray-400 hover:text-black')}
      onClick={handleLike}
    >
      <IconHeart
        size={20}
        className={classNames({ 'fill-current': likelist.includes(item.id) })}
        stroke={1}
      />
    </button>
  );
};
