import React, { forwardRef, useState } from 'react';
import classnames from 'classnames';
import { IconCheck } from '@tabler/icons';

export default forwardRef(({
  name = '', id = name, checked = false, onChange = () => (null),
}, ref) =>
// const [checked, setValue] = useState(() => ref.current?.checked);

  (
    <span className="inilne-flex">
      <input
        ref={ref}
        type="checkbox"
        id={id}
        name={name}
        // value={value}
        defaultValue={checked}
        onChange={onChange}
        hidden
      />
      <i className={classnames('flex-center rounded w-4 h-4 text-white', checked ? ['ui_theme_bg_color'] : ['border', ''])}>
        <IconCheck size={14} />
      </i>
    </span>
  ));
