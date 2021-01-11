import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { wordLength } from '@/common/utils';

export default ({
  value, setValue, placeholder, length,
}) => {
  const [n, setN] = useState(0);
  // 全角半角判断
  useEffect(() => {
    setN(wordLength(value) >> 0);
  }, [value]);
  return (
    <div className="ui_write">
      <textarea
        onChange={({ target }) => setValue(target.value)}
        value={value}
        className="textarea"
        placeholder={placeholder}
      />
      <span className={classnames(['length', n > length ? 'red' : 'ui_gray'])}>{length - n}</span>
    </div>
  );
};
