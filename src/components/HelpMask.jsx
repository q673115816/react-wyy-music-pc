import React from 'react';
import { createPortal } from 'react-dom';

export default ({ dragger, ...props }) => {
  if (!dragger) return null;
  return createPortal(<div
    className="fixed inset-0 z-50"
    {...props}
  />, document.querySelector('#help-root'));
};
