import React, { useState } from 'react';

export default () => {
  const [name] = useState('Artist');
  return (
    <div>{name}</div>
  );
};
