import React from 'react';

export default ({ total, size, curr }) => {
  const len = Math.ceil(total / size);
  return (
    <div className="commonpage">
      <div className={['prev', 'btn', curr <= 0 ? 'disabled' : null].join(' ')}>&lt;</div>
      {
                Array.from({ length: len }).map((item, index) => (
                  <div className={['btn', curr === index + 1 ? 'on' : null].join(' ')} key={item}>{index + 1}</div>
                ))
            }
      <div className={['next', 'btn', curr >= len ? 'disabled' : null].join(' ')}>&gt;</div>
    </div>
  );
};
