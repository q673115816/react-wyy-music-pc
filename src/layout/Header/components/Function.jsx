import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  IconSettings,
  IconPalette,
  IconMail,
} from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '@/reducers/common/actions';
import DomSkin from './Skin';

export default memo(() => {
  const dispatch = useDispatch();
  const { popupStatus, newMsgCount } = useSelector(({ common }) => common);
  const [visibility, setVisibility] = useState(false);
  const handlesetPopup = () => {
    if (popupStatus === 'privateLetter') {
      dispatch(setPopup({ popupStatus: '' }));
    } else {
      dispatch(setPopup({ popupStatus: 'privateLetter' }));
    }
  };
  return (
    <div className="domHeader_function flex space-x-3">
      <Link
        to="/settings"
        className="relative text-white text-opacity-90 hover:text-opacity-100 "
        title="设置"
      >
        <IconSettings size={24} />
      </Link>
      <div className="relative domHeader_function_skin ">
        <button
          onClick={() => setVisibility(!visibility)}
          type="button"
          className="focus:outline-none text-white text-opacity-90 hover:text-opacity-100"
          title="换肤"
        >
          <IconPalette size={24} />
        </button>
        {
          visibility && <DomSkin />
        }
      </div>
      <button
        type="button"
        className="focus:outline-none text-white text-opacity-90 hover:text-opacity-100 relative"
        onClick={handlesetPopup}
        title="私信"
      >
        <IconMail size={24} />
        <span className="absolute -right-3 -top-0.5 bg-white ui_themeColor rounded-full px-1">{newMsgCount}</span>
      </button>
    </div>
  );
});
