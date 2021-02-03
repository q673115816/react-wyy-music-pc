import React, { useRef, useState } from 'react';
import { apiPlaylistCreate } from '@/api';
import classnames from 'classnames';
import { setDialogReset } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import DomCheckbox from '@/components/Checkbox';
import HOCDialog from '../Dialog';
import './style.scss';

const ShareWX = () => {
  const dispatch = useDispatch();
  const { } = useSelector(({ mask }) => mask);
  const [name, setName] = useState('');
  const privacy = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiPlaylistCreate({
        name,
      });
    } catch (error) {
      console.log(error);
    }
    return false;
    // dispatch(setDialogReset()
  };
  return (
    <form className="content px-4 pb-8" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          className="border w-full h-8 p-2 rounded placeholder-gray-300"
          placeholder="请输入新歌单标题"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <label htmlFor="privacy" className="flex items-center">
          <DomCheckbox name="privacy" ref={privacy} />
          &nbsp;
          <span>
            设置为隐私歌单
          </span>
        </label>
      </div>
      <div className="flex-center">
        <button
          type="submit"
          className={classnames('ui_btn red', { disabled: name.length === 0 })}
        >
          创建
        </button>
      </div>
    </form>
  );
};

export default HOCDialog(ShareWX, 'dialogCreatePlaylist', '新建歌单');
