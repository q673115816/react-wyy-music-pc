import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  IconSettings,
  IconTool,
  IconMail,
} from '@tabler/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '@/redux/actions';

export default () => {
  const dispatch = useDispatch();
  const { popupStatus, newMsgCount } = useSelector(({ common }) => common);
  const handlesetPopup = () => {
    if (popupStatus === 'privateLetter') {
      dispatch(setPopup({ popupStatus: '' }));
    } else {
      dispatch(setPopup({ popupStatus: 'privateLetter' }));
    }
  };
  return (
    <div className="domHeader_function">
      <Link to="/settings" className=" domHeader_ico" title="设置">
        <IconSettings size={24} stroke={1} />
      </Link>
      <button type="button" className=" domHeader_ico" title="换肤">
        <IconTool size={24} stroke={1} />
      </button>
      <button
        type="button"
        className=" domHeader_ico"
        onClick={handlesetPopup}
        title="私信"
      >
        <IconMail size={24} stroke={1} />
        <span className="rt_ico">{newMsgCount}</span>
      </button>
    </div>
  );
};
