import React, { useState } from 'react';
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
      <button type="button" className="close" onClick={() => setVisibility(false)}>
        ×
      </button>
      {
        faces.map((page, index) => (
          <div className="page" style={{ display: index === currpage ? null : 'none' }}>
            {
              page.map(([name, face]) => (
                <button
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
