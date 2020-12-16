import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';

export default ({ newsong = [] }) => (
  <div className="domHome_recommend_newsong">
    {
      newsong.map((item) => (
        <div key={item.id} className="item">
          <button type="button" onClick={() => console.log(item.id)} className="cover">
            <span className="ico">
              <i className="material-icons">play_arrow</i>
            </span>
            <Lazyload overflow>
              <img className="ui_containimg" src={`${item.picUrl}?param=100y100`} alt="" />
            </Lazyload>
          </button>
          <div className="content">
            <div className="name text-overflow">
              {item.name}
            </div>
            <div className="artist text-overflow">
              <span className="SQ">SQ</span>
                    &nbsp;
              {
                item.song.artists.map((artist) => (
                  <Link
                    to={`/artist/${artist.id}`}
                    className="gray"
                    key={artist.id}
                  >
                    {artist.name}

                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      ))
    }
  </div>
);
