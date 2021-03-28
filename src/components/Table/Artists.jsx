import React from 'react';
import { Link } from 'react-router-dom';

export default ({ artists = [] }) => (
  <div title={(artists.map((artist) => artist.name)).join(' / ')}>
    {artists.map((artist, index) => (
      <span key={artist.id + artist.name}>
        {index > 0 && ' / '}
        <Link to={`/artist/${artist.id}`} className="ui_text_gray_hover">
          {artist.name}
        </Link>
      </span>
    ))}
  </div>
);
