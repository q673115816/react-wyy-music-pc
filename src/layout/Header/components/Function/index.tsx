import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  IconSettings,
  IconPalette,
  IconMail,
} from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setPopupLetterToggle } from '@/reducers/mask/slice';
import DomSkinPop from './Skin';

const DomSkinBtn = memo(() => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="domHeader_function_skin">
      <button
        onClick={() => setVisibility(!visibility)}
        type="button"
        className="block focus:outline-none text-white text-opacity-90 hover:text-opacity-100"
        title="换肤"
      >
        <IconPalette size={24} />
      </button>
      {
        visibility && <DomSkinPop />
      }
    </div>
  );
});

const DomLetterBtn = memo(() => {
  const dispatch = useDispatch();
  const { newMsgCount } = useSelector(({ common }) => common);
  return (

    <button
      type="button"
      className="focus:outline-none text-white text-opacity-90 hover:text-opacity-100 relative"
      onClick={() => dispatch(setPopupLetterToggle())}
      title="私信"
    >
      <IconMail size={24} />
      <span className="absolute -right-3 -top-0.5 bg-white ui_themeColor leading-none rounded-xl px-1">
        {newMsgCount}
      </span>
    </button>
  );
});

export default memo(() => (
  <div className="domHeader_function flex space-x-3 relative h-full items-center">
    <DomSkinBtn />
    <Link
      to="/settings"
      className="relative text-white text-opacity-90 hover:text-opacity-100 "
      title="设置"
    >
      <IconSettings size={24} />
    </Link>
    <DomLetterBtn />
  </div>
));
