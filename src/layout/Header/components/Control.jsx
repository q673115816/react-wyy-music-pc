import React from 'react';
import {
  IconArrowsMinimize,
  IconMinus,
  IconSquare,
  IconX,
} from '@tabler/icons';

export default () => (
  <div className="domHeader_control">
    <button type="button" className=" domHeader_ico" title="mini模式">
      <IconArrowsMinimize size={24} stroke={1} />
    </button>
    <button type="button" className=" domHeader_ico" title="最小化">
      <IconMinus size={24} stroke={1} />
    </button>
    <button type="button" className=" domHeader_ico" title="最大化">
      <IconSquare size={24} stroke={1} />
    </button>
    <button type="button" className=" domHeader_ico" title="关闭">
      <IconX size={24} stroke={1} />
    </button>
  </div>
);
