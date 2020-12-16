import React from 'react';
import { Link } from 'react-router-dom';
import tingtingimg from '@img/tingting.jpg';

const tingting = 'https://look.163.com/hot?livetype=1';

export default ({ tag = false }) => (
  <div className="item">
    <div className="cover">
      <div className="inner">
        <Link to={tingting}>
          <img className="ui_containimg animate-zoomin" src={tingtingimg} alt="" />
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
    <div className="name text-overflow">
      <Link to={tingting}>name</Link>
    </div>
    <div className="artist text-overflow gary">
      <Link to={tingting}>artist</Link>
    </div>
  </div>
);
