import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import kankanimg from '@img/kankan.jpg';

const kankan = 'https://look.163.com/hot?livetype=2';

export default memo(({ tag = false }) => (
  <div className="item">
    <div className="cover relative rounded overflow-hidden ui_aspect-ratio-1/1">
      <Link to={kankan} className="absolute inset-0">
        <img className="object-cover" src={kankanimg} alt="" />
        <div className="absolute top-0 right-0 m-1">
          <span className="text-white">playCount</span>
        </div>
        <div className="absolute left-0 bottom-0 m-1">
          <span className="text-white">artist</span>
        </div>
        {
          tag
          && Math.random() < 0.67
          && (
            <div className="lt">
              <div className="tag">理想女友</div>
            </div>
          )
        }
      </Link>
    </div>
    <div className="footer text-sm mt-1">
      <Link to={kankan}>name</Link>
    </div>
  </div>
));
