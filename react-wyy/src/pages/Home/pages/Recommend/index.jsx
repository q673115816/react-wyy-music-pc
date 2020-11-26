import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="domHome_recommend">
    <div>广告</div>
    <div>
      <Link className="domHome_titlelink" to="/home/playlist">
        推荐歌单 &gt;
      </Link>
    </div>
    <div>
      <Link className="domHome_titlelink" to="/privatecontent">
        独家放送 &gt;
      </Link>
    </div>
    <div>
      <Link className="domHome_titlelink" to="/home/playlist">
        最新音乐 &gt;
      </Link>
    </div>
    <div>
      <Link className="domHome_titlelink" to="/home/playlist">
        推荐mv &gt;
      </Link>
    </div>
    <div>
      <Link className="domHome_titlelink" to="/home/playlist">
        主播电台 &gt;
      </Link>
    </div>
    <div>
      <Link className="domHome_titlelink" to="/home/playlist">
        听听 &gt;
      </Link>
    </div>
    <div>
      <Link className="domHome_titlelink" to="/home/playlist">
        看看 &gt;
      </Link>
    </div>
  </div>
);
