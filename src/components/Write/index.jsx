import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { wordLength } from '@/common/utils';
import './style.scss';

export default ({
  value, setValue, placeholder, length,
}) => {
  const [n, setN] = useState(0);
  // 全角半角判断
  useEffect(() => {
    setN(wordLength(value) >> 0);
  }, [value]);
  return (
    <div className="ui_write relative">
      <textarea
        onChange={({ target }) => setValue(target.value)}
        value={value}
        className="textarea border rounded px-2 py-1"
        placeholder={placeholder}
      />
      <span className={classNames('length absolute right-0 bottom-0 mx-2', n > length ? 'red' : 'text-gray-300')}>
        {length - n}
      </span>
    </div>
  );
};
