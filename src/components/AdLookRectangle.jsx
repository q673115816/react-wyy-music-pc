import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import kankanimg from '@img/kankan.jpg';

const kankan = 'https://look.163.com/hot?livetype=2';

export default memo(({ tag = false }) => (
  <div className="item">
    <div className="cover">
      <div className="inner">
        <Link to={kankan}>
          <img className="ui_coverimg" src={kankanimg} alt="" />
          <div className="absolute top-0 right-0">
            <span className="whitetext">playCount</span>
          </div>
          <div className="absolute left-0 bottom-0">
            <span className="whitetext">artist</span>
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
    </div>
    <div className="footer">
      <Link to={kankan}>name</Link>
    </div>
  </div>
));
