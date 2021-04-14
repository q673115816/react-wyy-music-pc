import classNames from 'classnames';
import React from 'react';

export default ({ children, text = 'MV', className }) => (
  <svg viewBox="0 0 16 12" className={classNames('border w-5 h-3 border-current rounded-sm ui_themeColor', className)}>
    <text className="fill-current font-bold" x="50%" y="50%" fontSize="11" textAnchor="middle" dominantBaseline="middle">{text}</text>
    {children}
  </svg>
);
