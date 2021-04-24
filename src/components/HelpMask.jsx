import React, { memo } from 'react';
import { createPortal } from 'react-dom';

export default memo(({ dragger, ...props }) => {
  if (!dragger) return null;
  return createPortal(<div
    className="absolute inset-0 z-50"
    {...props}
  />, document.querySelector('#help-root'));
});
