import React from 'react';
import { Link } from 'react-router-dom';
import {
  IconSettings,
  IconTool,
  IconMail,
} from '@tabler/icons';

export default ({
  handlesetPopup,
  newMsgCount,
}) => (
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
