import React, { useState } from 'react';
import { IconX } from '@tabler/icons';
import classNames from 'classnames';
import faces from '@/common/faces';

export default ({ visibility, setVisibility, clickface }) => {
  const [currpage, setCurrpage] = useState(0);
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      setCurrpage(currpage > 0 ? currpage - 1 : 0);
    } else {
      setCurrpage(currpage < faces.length - 1 ? currpage + 1 : faces.length - 1);
    }
  };
  return (
    <div className="emojiFace" onWheel={handleWheel} style={{ display: visibility ? null : 'none' }}>
      <button type="button" className="absolute close right-0 top-0 ui_text_gray_hover mx-1" onClick={() => setVisibility(false)}>
        <IconX size={24} stroke={1} />
      </button>
      {
        faces.map((page, index) => (
          <div key={index} className={classNames('page text-lg grid grid-cols-10 p-4 gap-2', { hidden: currpage === index })}>
            {
              page.map(([name, face]) => (
                <button
                  key={face}
                  type="button"
                  className="ico"
                  title={name}
                  onClick={() => clickface(`[${name}]`)}
                >
                  {face}

                </button>
              ))
            }
          </div>
        ))
      }
      <div className="jump">
        {
          faces.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrpage(index)}
              type="button"
              className={currpage === index ? 'on' : null}
            />
          ))
        }
      </div>
    </div>
  );
};
