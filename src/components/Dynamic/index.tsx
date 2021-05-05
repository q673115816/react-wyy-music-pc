import React, { useState, useCallback } from 'react';
import DomEvent from '@/components/Event';

export default ({ list = [] }) => {
  const [actThreadId, setActThreadId] = useState('');
  const handleToggleComment = useCallback((threadId) => {
    setActThreadId((prev) => (prev === threadId ? null : threadId));
  }, []);
  return (
    <div className="divide-y">
      {list.map((item) => (
        <DomEvent
          key={item.id}
          item={item}
          commentIsShow={actThreadId === item.info.threadId}
          handleToggleComment={handleToggleComment}
        />
      ))}
    </div>
  );
};
