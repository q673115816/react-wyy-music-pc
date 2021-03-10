import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import { IconCheck } from '@tabler/icons';

export default forwardRef(({
  name = '', id = name, checked = false, onChange = () => (null),
}, ref) => {
  const [value, setValue] = useState(checked);
  const defaultChange = (e) => {
    setValue(e.target.checked);
    onChange(e);
  };
  return (
    <span className="inline-flex">
      <input
        ref={ref}
        type="checkbox"
        id={id}
        name={name}
        checked={value}
        // defaultValue={checked}
        onChange={defaultChange}
        hidden
      />
      <i className={classNames('flex-center rounded w-4 h-4 text-white', value ? 'ui_theme_bg_color' : 'border')}>
        <IconCheck size={14} />
      </i>
    </span>
  );
});
