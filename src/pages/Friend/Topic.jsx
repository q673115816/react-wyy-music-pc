import React from 'react';
import { useParams } from 'react-router-dom';

export default () => {
  const { id } = useParams();
  return (
    <div className="domFriend overflow-auto max-h-full flex-auto">
      <div className="domFriend_left">{id}</div>
      <div className="domFriend_split" />
      <div className="domFriend_right">{}</div>

    </div>
  );
};
