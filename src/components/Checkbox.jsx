import React, { forwardRef, useState } from 'react';
import classnames from 'classnames';
import { IconCheck } from '@tabler/icons';

export default forwardRef(({ name = '', id = name }, ref) => {
  const [value, setValue] = useState(false);
  return (
    <span className="inilne-flex">
      <input
        ref={ref}
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={() => setValue(!value)}
        hidden
      />
      <i className={classnames('flex-center border rounded-sm w-4 h-4', { ui_theme_bg_color: value })}>
        <IconCheck size={12} className />
      </i>
    </span>
  );
});
