import React from 'react';
import { Link } from 'react-router-dom';
import tingtingimg from '@img/tingting.jpg';

const tingting = 'https://look.163.com/hot?livetype=1';

export default () => (
  <div className="item">
    <div className="cover">
      <div className="inner">
        <Link to={tingting}>
          <img className="containimg animate-zoomin" src={tingtingimg} alt="" />
          <div className="lt">
            <div className="lt_tag">理想女友</div>
          </div>
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
