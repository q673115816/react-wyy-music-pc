import React from 'react';

export default ({ pop = 0 }) => (
  <div className="range w-20 h-1.5 rounded bg-gray-200">
    <div className="h-full bg-gray-300 rounded" style={{ width: `${pop}%` }} />
  </div>
);
