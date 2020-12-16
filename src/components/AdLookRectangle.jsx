import React from 'react';
import { Link } from 'react-router-dom';
import kankanimg from '@img/kankan.jpg';

const kankan = 'https://look.163.com/hot?livetype=2';

export default ({ tag = false }) => (
  <div className="item">
    <div className="cover">
      <div className="inner">
        <Link to={kankan}>
          <img className="ui_coverimg" src={kankanimg} alt="" />
          <div className="rt">
            <span className="whitetext">playCount</span>
          </div>
          <div className="lb">
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
);
